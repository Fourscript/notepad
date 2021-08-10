import { DecoupledEditor } from '@ckeditor/ckeditor5-build-decoupled-document';

export class Notepad {
    constructor() {
        this.editor = null;
    }

    init(editorEl, toolbarEl) {
        DecoupledEditor
            .create(editorEl)
            .then(editor => {
                toolbarEl.appendChild(editor.ui.view.toolbar.element);
                this.editor = editor;
            })
            .catch(e => {
                console.error(e);
            });
    }
}