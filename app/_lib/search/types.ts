export type SearchDocumentType = "page" | "heading" | "content" | "tool";

export type SearchDocument = {
  id: string;
  url: string;
  title: string;
  heading: string | null;
  content: string;
  type: SearchDocumentType;
};

export type SearchHit = SearchDocument & {
  score: number;
};

export type SearchIndexPayload = {
  documents: SearchDocument[];
};
