import Editor from "@monaco-editor/react";
import { Selector } from "./selector";
import React, { useState } from "react";
import { CODE_SNIPPETS } from "../constants";
import {Button} from "./ui/button";
import {toast} from "sonner";
import { executeCode } from "../backend/api";

function CodeEditor( { setOutput, setProgress }) 
{
  const runCode = () => 
  {
    const codeToRun = editorRef.current?.getValue();

    if (!codeToRun?.trim()) {
      toast.error("Code can't be empty");
      return;
    }

    setProgress(10);

    executeCode(language, codeToRun)
	  .then((output) => {
		setOutput(output);
		setProgress(100);
		toast.success("Code executed successfully", {
		  description: "Check the output section for results.",
		  variant: "default",
		});
	  })
	  .catch((error) => {
		setOutput(error.message);
		setProgress(0);
		toast.error("Error executing code", {
		  description: error.message,
		  variant: "destructive",
		});
	  });
  };


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
          <Button variant= "outline" onClick = {runCode}>Run</Button>
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