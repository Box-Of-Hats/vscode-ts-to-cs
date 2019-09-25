import * as vscode from "vscode";
import { convertInterfacesToCSharp } from "ts-csharp";

class TsCsharpCommandProvider {
    generateClassFromInterfaces = (exportedInterfacesOnly?: boolean) => {
        let textEditor = vscode.window.activeTextEditor;

        let documentText = textEditor!.document.getText(textEditor!.selection);

        if (!textEditor) {
            vscode.window.showErrorMessage(
                "No active text editor. Please open a file"
            );
            return;
        }

        let infoMessage = vscode.window.setStatusBarMessage(
            `Generating csharp class...`
        );

        let csharpClass: string = convertInterfacesToCSharp(
            documentText,
            exportedInterfacesOnly
        );

        if (!csharpClass || csharpClass.length === 0) {
            infoMessage.dispose();
            vscode.window.showErrorMessage(
                "Could not find any interfaces to generate from."
            );
        }

        vscode.workspace
            .openTextDocument({
                language: "csharp",
                content: csharpClass
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
    }
}

export { TsCsharpCommandProvider };
