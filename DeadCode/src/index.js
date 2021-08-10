import { Notepad } from './notepad';

const notepadInst = new Notepad();
const editorEl = document.getElementById('editor');
const toolbarEl = document.getElementById('editor-toolbar-container');

notepadInst.init(editorEl, toolbarEl);