import { tokenize, uniqueTokens } from "./tokenize";
import type { SearchDocument, SearchHit } from "./types";

const K1 = 1.2;
const B = 0.75;
const IDF_SMOOTHING = 0.5;
const DEFAULT_LIMIT = 15;
const PREFIX_MIN_LENGTH = 3;
const PREFIX_BOOST = 0.4;
const HASH_SEPARATOR = "#";

const FIELDS = ["title", "heading", "content"] as const;
type FieldName = (typeof FIELDS)[number];

const FIELD_WEIGHTS: Record<FieldName, number> = {
  title: 5,
  heading: 3,
  content: 1,
};

type FieldIndex = {
  df: Map<string, number>;
  avgLength: number;
};

type IndexedDocument = {
  document: SearchDocument;
  fieldTokens: Record<FieldName, string[]>;
  termFrequency: Record<FieldName, Map<string, number>>;
  fieldLength: Record<FieldName, number>;
};

export type Bm25Index = {
  search: (query: string, limit?: number) => SearchHit[];
};

function termCounts(tokens: string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const token of tokens) {
    counts.set(token, (counts.get(token) ?? 0) + 1);
  }
  return counts;
}

function inverseDocumentFrequency(
  documentFrequency: number,
  n: number
): number {
  return Math.log(
    1 +
      (n - documentFrequency + IDF_SMOOTHING) /
        (documentFrequency + IDF_SMOOTHING)
  );
}

function bm25FieldScore(
  termFrequency: number,
  fieldLength: number,
  avgLength: number,
  idf: number
): number {
  if (termFrequency === 0) {
    return 0;
  }
  const safeAvg = avgLength > 0 ? avgLength : 1;
  const numerator = termFrequency * (K1 + 1);
  const denominator =
    termFrequency + K1 * (1 - B + B * (fieldLength / safeAvg));
  return idf * (numerator / denominator);
}

function urlWithoutHash(url: string): string {
  const hashIndex = url.indexOf(HASH_SEPARATOR);
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function prefixBoost(queryTokens: string[], titleTokens: string[]): number {
  let boost = 0;
  for (const queryToken of queryTokens) {
    if (queryToken.length < PREFIX_MIN_LENGTH) {
      continue;
    }
    const hasPrefix = titleTokens.some((titleToken) =>
      titleToken.startsWith(queryToken)
    );
    if (hasPrefix) {
      boost += PREFIX_BOOST;
    }
  }
  return boost;
}

function buildFieldIndexes(
  indexed: IndexedDocument[],
  documentCount: number
): Record<FieldName, FieldIndex> {
  const fields = {} as Record<FieldName, FieldIndex>;

  for (const field of FIELDS) {
    const df = new Map<string, number>();
    let totalLength = 0;

    for (const item of indexed) {
      totalLength += item.fieldLength[field];
      const seen = new Set(item.fieldTokens[field]);
      for (const token of seen) {
        df.set(token, (df.get(token) ?? 0) + 1);
      }
    }

    fields[field] = {
      df,
      avgLength: documentCount > 0 ? totalLength / documentCount : 0,
    };
  }

  return fields;
}

function scoreDocument(
  item: IndexedDocument,
  queryTokens: string[],
  fieldIndexes: Record<FieldName, FieldIndex>,
  documentCount: number
): number {
  let score = 0;

  for (const field of FIELDS) {
    const fieldIndex = fieldIndexes[field];
    let fieldScore = 0;

    for (const token of queryTokens) {
      const tf = item.termFrequency[field].get(token) ?? 0;
      if (tf === 0) {
        continue;
      }
      const df = fieldIndex.df.get(token) ?? 0;
      fieldScore += bm25FieldScore(
        tf,
        item.fieldLength[field],
        fieldIndex.avgLength,
        inverseDocumentFrequency(df, documentCount)
      );
    }

    score += fieldScore * FIELD_WEIGHTS[field];
  }

  score += prefixBoost(queryTokens, item.fieldTokens.title);
  score += prefixBoost(queryTokens, item.fieldTokens.heading);
  return score;
}

function bestHitPerPage(hits: SearchHit[]): SearchHit[] {
  const best = new Map<string, SearchHit>();

  for (const hit of hits) {
    const pageUrl = urlWithoutHash(hit.url);
    const current = best.get(pageUrl);
    if (!current || hit.score > current.score) {
      best.set(pageUrl, hit);
    }
  }

  return [...best.values()].sort((left, right) => right.score - left.score);
}

/**
 * Build an in-memory BM25 index over docs search records.
 *
 * Ranking is multi-field (title > heading > content). Results are collapsed
 * to the best-scoring record per page so a long page cannot fill the list.
 */
export function createBm25Index(documents: SearchDocument[]): Bm25Index {
  const indexed: IndexedDocument[] = documents.map((document) => {
    const fieldTokens = {
      title: tokenize(document.title),
      heading: tokenize(document.heading ?? ""),
      content: tokenize(document.content),
    };

    return {
      document,
      fieldTokens,
      termFrequency: {
        title: termCounts(fieldTokens.title),
        heading: termCounts(fieldTokens.heading),
        content: termCounts(fieldTokens.content),
      },
      fieldLength: {
        title: fieldTokens.title.length,
        heading: fieldTokens.heading.length,
        content: fieldTokens.content.length,
      },
    };
  });

  const documentCount = indexed.length;
  const fieldIndexes = buildFieldIndexes(indexed, documentCount);

  return {
    search(query: string, limit = DEFAULT_LIMIT): SearchHit[] {
      const queryTokens = uniqueTokens(query);
      if (queryTokens.length === 0 || documentCount === 0) {
        return [];
      }

      const scored: SearchHit[] = [];
      for (const item of indexed) {
        const score = scoreDocument(
          item,
          queryTokens,
          fieldIndexes,
          documentCount
        );
        if (score > 0) {
          scored.push({ ...item.document, score });
        }
      }

      return bestHitPerPage(scored).slice(0, limit);
    },
  };
}
