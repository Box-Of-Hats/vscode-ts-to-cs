import * as vscode from "vscode";
import { TsCsharpCommandProvider } from "./commandProvider";

export function activate(context: vscode.ExtensionContext) {
    const commandProvider = new TsCsharpCommandProvider();

    context.subscriptions.push(
        vscode.commands.registerCommand(
            "extension.tscsharp.generateClassFromInterface",
            () => {
                commandProvider.generateClassFromInterfaces(false);
            }
        ),
        vscode.commands.registerCommand(
            "extension.tscsharp.generateClassFromExportedInterface",
            () => {
                commandProvider.generateClassFromInterfaces(true);
            }
        )
    );
}
export function deactivate() {}
