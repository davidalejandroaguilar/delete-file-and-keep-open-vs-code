// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const { exec } = require("child_process");

function deleteFileViaRm(filePath) {
  return new Promise((resolve, reject) => {
    exec(`rm "${filePath}"`, (err, stdout) => {
      if (err) {
        console.error(`Error deleting file: ${err.message}`);
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "delete-file-and-keep-open.deleteAndKeepOpen",
    async function () {
      const filePath = vscode.window.activeTextEditor?.document?.uri?.fsPath;
      if (!filePath) {
        vscode.window.showErrorMessage("No file selected");
        return;
      }

      try {
        await deleteFileViaRm(filePath);
      } catch (error) {
        vscode.window.showErrorMessage(`Error deleting file: ${error.message}`);
        return;
      }

      vscode.window.showInformationMessage(`File deleted: ${filePath}`);
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
