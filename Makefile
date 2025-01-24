
.PHONY: help

help:
	@echo "🛠️ Arcade docs commands:\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


install: ## Install the dependencies
	@pnpm install

build: ## Build the docs site
	@pnpm build


run: ## Run the docs site locally
	@pnpm dev
