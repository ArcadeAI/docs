<!-- A placeholder for a toolkit logo or cover image. Remove or replace with your own. -->
<h3>
  <a name="readme-top"></a>
  <img
    src="https://docs.arcade.dev/images/logo/arcade-logo.png"
    style="width: 250px;"
  >
  <p>+</p>
  <img
    src="https://images.ctfassets.net/wjg1udsw901v/78Ws2s56LgCLoxkx3Xdcsl/083d00cd84eeec428087bbab65ae3580/obsidian-logo.png"
    style="width: 300px;"
  >
</h3>
<!-- Add or remove badges as needed. For example, a GitHub star/fork badge or version badges. -->
<p>
  <img src="https://img.shields.io/github/stars/spartee/arcade_obsidian" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/spartee/arcade_obsidian" alt="GitHub forks">
  <img src="https://img.shields.io/github/v/release/spartee/arcade_obsidian" alt="GitHub release">
  <img src="https://img.shields.io/badge/python-3.10+-blue.svg" alt="Python version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/pypi/v/arcade_obsidian" alt="PyPI version">
</p>

<br>
<br>

# Arcade Obsidian Toolkit

Arcade Obsidian Toolkit provides llm tools for reading, searching and writing to obsidian vaults.

## Features

- Search and query obsidian vaults with natural language
- Create, update and delete notes in obsidian vault
- BM25 search index of markdown files with Whoosh
- Backup and restore of search index
- Background updating and file watching

## Install

Install this toolkit using pip:

```bash
pip install arcade_obsidian
```

## Available Tools

To show the tools you can run

```
arcade show --local
```

| Name | Description |
| --- | --- |
| Obsidian.CreateNote | Create a new note with given content. |
| Obsidian.UpdateNote | Update an existing note with new content. |
| Obsidian.SearchNotesByTitle | Search obsidian notes by title. |
| Obsidian.SearchNotesByContent | Search obsidian notes by content. Use when searching for a specific multiple-word |
| Obsidian.ListNotes | List all note filenames in the Obsidian vault. |
| Obsidian.ReadNote | Read the content of a specific note. |
