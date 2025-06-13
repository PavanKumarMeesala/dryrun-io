import Editor from "@monaco-editor/react";
import { Selector } from "./selector";
import React, { useState } from "react";
import { CODE_SNIPPETS } from "../constants";
import {Button} from "./ui/button";

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
        height: "60vh",
        width: "100%",
        borderRadius: "10px",
        border: "2px solid #ddd",
        boxShadow: "0 6px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", width: "100%", padding: "5px"}}>
        <Selector language={language} onSelect={onSelect} />
        
        <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
          <Button variant= "outline">Run</Button>
          <Button>Debug</Button>
        </div>
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