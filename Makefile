
.PHONY: help

help:
	@echo "🛠️ Arcade docs commands:\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


install: ## Install the dependencies
	@pnpm install

build: ## Build the docs site
	@pnpm build

lint: ## Lint the codebase
	@pnpm run lint

test: ## Run the tests
	@pnpm test -- --run

run: ## Run the docs site locally
	@pnpm dev

ruin:
	@echo "\033[31m\033[1m💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️\033[0m"
	@echo "\033[31m\033[1m👻                                          👻\033[0m"
	@echo "\033[31m\033[1m🔥  With but a single command, the realm   🔥\033[0m"
	@echo "\033[31m\033[1m🔥  of order shall collapse into chaos.    🔥\033[0m"
	@echo "\033[31m\033[1m👻                                          👻\033[0m"
	@echo "\033[31m\033[1m⚡  Beware, for what is ruined today may   ⚡\033[0m"
	@echo "\033[31m\033[1m⚡  take an eternity to rebuild.           ⚡\033[0m"
	@echo "\033[31m\033[1m👻                                          👻\033[0m"
	@echo "\033[31m\033[1m🎃      - The Elders of Makefile           🎃\033[0m"
	@echo "\033[31m\033[1m👻                                          👻\033[0m"
	@echo "\033[31m\033[1m💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️💀☠️\033[0m"
