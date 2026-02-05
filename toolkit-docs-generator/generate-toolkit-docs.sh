#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GEN_DIR="$SCRIPT_DIR"
DEFAULT_OUTPUT_DIR="${GEN_DIR}/../data/toolkits"
DEFAULT_ENGINE_URL="http://localhost:9099"
DEFAULT_METADATA_FILE="${GEN_DIR}/mock-data/metadata.json"

RUN_ALL="false"
PROVIDERS_ARG=""
SKIP_EXAMPLES="false"
SKIP_SUMMARY="false"

OUTPUT_DIR="${OUTPUT_DIR:-}"
METADATA_FILE="${METADATA_FILE:-}"

print_usage() {
  cat <<'USAGE'
Usage: ./generate-toolkit-docs.sh [options]

Options:
  --all                  Run for all toolkits
  --providers <list>     Comma-separated list (e.g. "Github:1.0.0,Slack")
  --output <dir>         Output directory (default: ../data/toolkits)
  --metadata-file <file> Metadata JSON file (default: mock-data/metadata.json)
  --skip-examples        Skip example generation
  --skip-summary         Skip summary generation
  -h, --help             Show this help message
USAGE
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --all)
      RUN_ALL="true"
      shift
      ;;
    --providers)
      PROVIDERS_ARG="${2:-}"
      shift 2
      ;;
    --output)
      OUTPUT_DIR="${2:-}"
      shift 2
      ;;
    --metadata-file)
      METADATA_FILE="${2:-}"
      shift 2
      ;;
    --skip-summary)
      SKIP_SUMMARY="true"
      shift
      ;;
    --skip-examples)
      SKIP_EXAMPLES="true"
      shift
      ;;
    -h|--help)
      print_usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      print_usage >&2
      exit 1
      ;;
  esac
done

prompt_value() {
  local var_name="$1"
  local prompt="$2"
  local default_value="${3:-}"
  local current_value="${!var_name-}"

  if [[ -n "${current_value}" ]]; then
    return
  fi

  if [[ -n "${default_value}" ]]; then
    read -r -p "${prompt} [${default_value}]: " current_value
    current_value="${current_value:-$default_value}"
  else
    read -r -p "${prompt}: " current_value
  fi

  export "${var_name}=${current_value}"
}

prompt_secret() {
  local var_name="$1"
  local prompt="$2"
  local current_value="${!var_name-}"

  if [[ -n "${current_value}" ]]; then
    return
  fi

  read -r -s -p "${prompt}: " current_value
  echo
  export "${var_name}=${current_value}"
}

prompt_value "ENGINE_API_URL" "Engine API URL" "${DEFAULT_ENGINE_URL}"
prompt_secret "ENGINE_API_KEY" "Engine API key"

if [[ "${SKIP_EXAMPLES}" != "true" || "${SKIP_SUMMARY}" != "true" ]]; then
  prompt_value "LLM_PROVIDER" "LLM provider (openai|anthropic)" "openai"
  if [[ "${LLM_PROVIDER}" != "openai" && "${LLM_PROVIDER}" != "anthropic" ]]; then
    echo "LLM provider must be 'openai' or 'anthropic'." >&2
    exit 1
  fi

  prompt_value "LLM_MODEL" "LLM model"
  if [[ -z "${LLM_MODEL}" ]]; then
    echo "LLM model is required." >&2
    exit 1
  fi

  if [[ "${LLM_PROVIDER}" == "openai" ]]; then
    prompt_secret "LLM_API_KEY" "OpenAI API key"
  else
    prompt_secret "LLM_API_KEY" "Anthropic API key"
  fi
fi

OUTPUT_DIR="${OUTPUT_DIR:-$DEFAULT_OUTPUT_DIR}"
METADATA_FILE="${METADATA_FILE:-$DEFAULT_METADATA_FILE}"

if [[ "${RUN_ALL}" != "true" && -z "${PROVIDERS_ARG}" ]]; then
  read -r -p "Providers (e.g. Github:1.0.0,Slack) or leave blank for all: " PROVIDERS_ARG
  if [[ -z "${PROVIDERS_ARG}" ]]; then
    RUN_ALL="true"
  fi
fi

echo "Starting generator..."
echo "  Engine URL: ${ENGINE_API_URL}"
echo "  Output: ${OUTPUT_DIR}"
echo "  LLM: ${LLM_PROVIDER} (${LLM_MODEL})"

if [[ "${RUN_ALL}" == "true" ]]; then
  echo "  Providers: all"
else
  echo "  Providers: ${PROVIDERS_ARG}"
fi

cmd=(pnpm --dir "${GEN_DIR}" start generate)
if [[ "${RUN_ALL}" == "true" ]]; then
  cmd+=(--all)
else
  cmd+=(--providers "${PROVIDERS_ARG}")
fi

cmd+=(--engine-api-url "${ENGINE_API_URL}")
cmd+=(--engine-api-key "${ENGINE_API_KEY}")
cmd+=(--metadata-file "${METADATA_FILE}")
cmd+=(--output "${OUTPUT_DIR}")
if [[ "${SKIP_EXAMPLES}" == "true" ]]; then
  cmd+=(--skip-examples)
fi

if [[ "${SKIP_SUMMARY}" == "true" ]]; then
  cmd+=(--skip-summary)
fi

if [[ "${SKIP_EXAMPLES}" != "true" || "${SKIP_SUMMARY}" != "true" ]]; then
  cmd+=(--llm-provider "${LLM_PROVIDER}")
  cmd+=(--llm-model "${LLM_MODEL}")
  cmd+=(--llm-api-key "${LLM_API_KEY}")
fi

exec "${cmd[@]}"
