const path = require("path");
const fs = require("fs");
const vscode = require("vscode");

async function activate(extension) {
  await extension.activate();
}

function getDocUri(p) {
  return vscode.Uri.file(getDocPath(p));
}

function getDocPath(p) {
  return path.resolve(__dirname, "..", p);
}

function createSampleFile(filePath) {
  const sampleContent = "Sample text file content";
  fs.writeFileSync(filePath, sampleContent);
}

module.exports = {
  activate,
  getDocUri,
  getDocPath,
  createSampleFile,
};
