import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('EncounterPlus Markdown Extension loaded.');
	return {
		extendMarkdownIt(md: any) {
			return md
				.use(require('markdown-it-attrs'))
				.use(require('markdown-it-anchor'))
				.use(require('markdown-it-imsize'), { autofill: true });
		}
	};
}
