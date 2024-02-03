'use client';
"use strict";
exports.__esModule = true;
exports.Editor = void 0;
var react_monaco_editor_1 = require("react-monaco-editor");
var react_1 = require("react");
function Editor() {
    var _a = react_1.useState(false), showEditor = _a[0], setShowEditor = _a[1];
    react_1.useEffect(function () {
        setShowEditor(true);
    }, []);
    // const code = this.state.code;
    var options = {
        selectOnLineNumbers: true
    };
    return (React.createElement(React.Fragment, null, showEditor && (React.createElement(react_monaco_editor_1["default"], { className: 'size-full', language: "javascript", theme: "vs-dark", value: "code", options: options, onChange: console.log, editorDidMount: console.log }))));
}
exports.Editor = Editor;
