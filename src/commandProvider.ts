import * as vscode from "vscode";
import { convertInterfacesToCSharp } from "ts-csharp";

class TsCsharpCommandProvider {
	generateClassFromInterfaces = (exportedInterfacesOnly?: boolean) => {
		let textEditor = vscode.window.activeTextEditor;

		if (!textEditor) {
			vscode.window.showErrorMessage(
				"No active text editor. Please open a file"
			);
			return;
		}

		const documentText =
			textEditor.document.getText(textEditor.selection) ||
			textEditor.document.getText();

		let infoMessage = vscode.window.setStatusBarMessage(
			`Generating csharp class...`
		);

		let csharpClass: string = convertInterfacesToCSharp(
			documentText,
			exportedInterfacesOnly
		);

		if (!csharpClass || csharpClass.length === 0) {
			infoMessage.dispose();

			if (exportedInterfacesOnly) {
				vscode.window.showErrorMessage(
					"Could not find any exported interfaces to generate from."
				);
			} else {
				vscode.window.showErrorMessage(
					"Could not find any interfaces to generate from."
				);
			}

			return;
		}

		vscode.workspace
			.openTextDocument({
				language: "csharp",
				content: csharpClass,
			})
			.then(doc => {
				vscode.window
					.showTextDocument(doc)
					.then(e => {
						vscode.commands.executeCommand(
							"editor.action.formatDocument"
						);
					})
					.then(infoMessage.dispose());
			});
	};
}

export { TsCsharpCommandProvider };
