const assert = require("assert");

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require("vscode");
const extension = require("../../extension");
const fs = require("fs");

const { activate, getDocUri, createSampleFile } = require("../helper");

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Sample test", () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });

  test("It deletes a file without closing it in the editor", async () => {
    createSampleFile("sample.txt");
    const docUri = getDocUri("sample.txt");

    await testDeleteFileAndKeepOpen(docUri);
  });
});

async function testDeleteFileAndKeepOpen(docUri) {
  const doc = await vscode.workspace.openTextDocument(docUri);
  await vscode.window.showTextDocument(doc);

  await vscode.commands.executeCommand(
    "delete-file-and-keep-open.deleteAndKeepOpen"
  );

  // Check if the file is actually deleted
  assert.ok(!fs.existsSync(docUri.fsPath), "File should be deleted");

  // Check if the document remains open after deletion
  assert.ok(
    doc.isClosed === false,
    "Document should remain open after deletion"
  );
}
