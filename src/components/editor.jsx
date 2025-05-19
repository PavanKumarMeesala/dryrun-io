import Editor from "@monaco-editor/react";
import React, { useState } from "react";

function CodeEditor() {
  const editorRef = React.useRef(null);
  const [code, setCode] = useState('');

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }
  return (
    <div style={{ height: "65vh", width: "50%",  borderRadius: "10px",
        marginLeft: "1%",
        border: "2px solid #ddd",
        boxShadow: "0 6px 6px rgba(0, 0, 0, 0.1)",}}>
      <Editor
        defaultLanguage="javascript"
        defaultValue="// Start coding..."
        theme="vs"
        options={{
          fontFamily: "Consolas",
          fontSize: 20, 
        }}
        
        onMount={onMount}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}

export default CodeEditor;
