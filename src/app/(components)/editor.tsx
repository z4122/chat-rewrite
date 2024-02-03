'use client'

import MonacoEditor from 'react-monaco-editor';
import { useState, useEffect } from "react";

export function Editor() {
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    setShowEditor(true);
  }, []);

  // const code = this.state.code;
  const options = {
    selectOnLineNumbers: true
  };

  return (
    <>
      {showEditor && (
        <MonacoEditor className={'size-full'}
          language="javascript"
          theme="vs-dark"
          value={"code"}
          options={options}
          onChange={console.log}
          editorDidMount={console.log}
        />)}
    </>
  )
}