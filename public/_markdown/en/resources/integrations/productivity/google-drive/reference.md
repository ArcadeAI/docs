---
title: "Google Drive Reference"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
[Google Drive](/en/resources/integrations/productivity/google-drive.md)
Reference

# Google Drive Reference

Below is a reference of enumerations used by some tools in the Google Drive MCP Server:

## OrderBy

Sort order options for listing and searching files.

-   **CREATED\_TIME**: `createdTime` - When the file was created (ascending)
-   **CREATED\_TIME\_DESC**: `createdTime desc` - When the file was created (descending)
-   **FOLDER**: `folder` - The folder ID, sorted using alphabetical ordering (ascending)
-   **FOLDER\_DESC**: `folder desc` - The folder ID, sorted using alphabetical ordering (descending)
-   **MODIFIED\_BY\_ME\_TIME**: `modifiedByMeTime` - The last time the file was modified by the user (ascending)
-   **MODIFIED\_BY\_ME\_TIME\_DESC**: `modifiedByMeTime desc` - The last time the file was modified by the user (descending)
-   **MODIFIED\_TIME**: `modifiedTime` - The last time the file was modified by anyone (ascending)
-   **MODIFIED\_TIME\_DESC**: `modifiedTime desc` - The last time the file was modified by anyone (descending)
-   **NAME**: `name` - The name of the file, sorted alphabetically (ascending)
-   **NAME\_DESC**: `name desc` - The name of the file, sorted alphabetically (descending)
-   **NAME\_NATURAL**: `name_natural` - The name of the file, sorted using natural sort ordering (ascending)
-   **NAME\_NATURAL\_DESC**: `name_natural desc` - The name of the file, sorted using natural sort ordering (descending)
-   **QUOTA\_BYTES\_USED**: `quotaBytesUsed` - The number of storage quota bytes used by the file (ascending)
-   **QUOTA\_BYTES\_USED\_DESC**: `quotaBytesUsed desc` - The number of storage quota bytes used by the file (descending)
-   **RECENCY**: `recency` - The most recent timestamp from the file’s date-time fields (ascending)
-   **RECENCY\_DESC**: `recency desc` - The most recent timestamp from the file’s date-time fields (descending)
-   **SHARED\_WITH\_ME\_TIME**: `sharedWithMeTime` - When the file was shared with the user (ascending)
-   **SHARED\_WITH\_ME\_TIME\_DESC**: `sharedWithMeTime desc` - When the file was shared with the user (descending)
-   **STARRED**: `starred` - Whether the user has starred the file (ascending)
-   **STARRED\_DESC**: `starred desc` - Whether the user has starred the file (descending)
-   **VIEWED\_BY\_ME\_TIME**: `viewedByMeTime` - The last time the file was viewed by the user (ascending)
-   **VIEWED\_BY\_ME\_TIME\_DESC**: `viewedByMeTime desc` - The last time the file was viewed by the user (descending)

## GoogleDriveFileType

File type filters for searching files.

-   **SPREADSHEET**: `spreadsheet` - Google Sheets
-   **SLIDES**: `slides` - Google Slides presentations
-   **DOCUMENT**: `document` - Google Docs
-   **DRAWING**: `drawing` - Google Drawings
-   **FORM**: `form` - Google Forms
-   **FOLDER**: `folder` - Folders
-   **IMAGE**: `image` - Image files (JPEG, PNG, GIF, WebP)
-   **VIDEO**: `video` - Video files (MP4, MPEG, QuickTime, WebM)
-   **AUDIO**: `audio` - Audio files (MP3, M4A, WAV)
-   **SCRIPT**: `script` - Google Apps Script
-   **SITES**: `sites` - Google Sites
-   **PDF**: `pdf` - PDF documents

## PermissionRole

Permission roles for sharing Google Drive files and folders.

-   **READER**: `reader` - Can view and download
-   **COMMENTER**: `commenter` - Can view, download, and comment
-   **WRITER**: `writer` - Can view, download, comment, and edit
-   **OWNER**: `owner` - Full control (transfer ownership)

## UploadMimeType

Supported file types for uploading to Google Drive. This tool can only upload regular files - it cannot create Google Workspace files (Google Docs, Sheets, Slides).

### Text-based files

-   **PLAIN\_TEXT**: `text/plain` - .txt files
-   **CSV**: `text/csv` - .csv spreadsheet data
-   **JSON**: `application/json` - .json data files
-   **HTML**: `text/html` - .html web pages
-   **MARKDOWN**: `text/markdown` - .md documentation

### Documents

-   **PDF**: `application/pdf` - .pdf documents

### Images

-   **PNG**: `image/png` - .png images
-   **JPEG**: `image/jpeg` - .jpg/.jpeg images
-   **GIF**: `image/gif` - .gif images
-   **WEBP**: `image/webp` - .webp images
-   **SVG**: `image/svg+xml` - .svg vector graphics

Last updated on February 6, 2026

[Google Drive](/en/resources/integrations/productivity/google-drive.md)
[Google Sheets](/en/resources/integrations/productivity/google-sheets.md)
