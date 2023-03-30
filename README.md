# Delete File and Keep Open VS Code extension

This extension allows you to delete files without automatically closing the file in the editor.

Currently, VS Code [doesn't have plans](https://github.com/microsoft/vscode/issues/123389#issuecomment-894218755) to add this feature. And the current `workbench.editor.closeOnFileDelete` setting is only for reacting to external file events, not from within VSCode (like the explorer).

The extension is inspired by SublimeText, as many other extension are.

## Features

Deleting a file:

![command](media/deleting.gif)

The file remains open, can be edited and saved again in-place.

## Requirements

None.

## Extension Settings

No settings yet.

## Known Issues

No issues yet.

## Release Notes

### 1.0.0

Initial release.

**Enjoy!**
