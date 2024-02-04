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

        <div className="flex h-full flex-col justify-center align-middle">
          <div className="h-full mx-5 my-5 bg-white rounded-lg">
            <MonacoEditor className={'rounded-lg'}
              language="javascript"
              theme="vs"
              value={"code"}
              options={options}
              onChange={console.log}
              editorDidMount={console.log}
            />
          </div>
        </div>

      )}
    </>
  )
}
