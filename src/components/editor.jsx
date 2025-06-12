import Editor from "@monaco-editor/react";
import { Selector } from "./selector";
import React, { useState } from "react";
import { CODE_SNIPPETS } from "../constants";

function CodeEditor() {
  const editorRef = React.useRef(null);
  const [code, setCode] = useState(CODE_SNIPPETS["c"]);
  const [language, setLanguage] = useState("c");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setCode(CODE_SNIPPETS[selectedLanguage]);
  };

  return (
    <div
      style={{
        height: "65vh",
        width: "50%",
        borderRadius: "10px",
        marginLeft: "1%",
        border: "2px solid #ddd",
        boxShadow: "0 6px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
        <Selector language={language} onSelect={onSelect} />
      </div>
      <Editor
        language={language} 
        value={code}
        theme="vs"
        options={{
          fontFamily: "Consolas",
          fontSize: 15,
        }}
        onMount={onMount}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}

export default CodeEditor;