import { useState } from 'react'
import './App.css'
import Logo from "@/components/ui/logo";
import MenuBar from './components/navigationMenu';
import CodeEditor from './components/editor';
import Output from './components/output';
import Dryrun from './components/dryrun';
import InputBox from './components/inputBox';
import { Toaster } from 'sonner';

function App() {
  const [progress, setProgress] = useState(0);
  const [output, setOutput] = useState("");



  return (
    <>
      <div className="NavBar">
        <Logo />
        <MenuBar/>
      </div>
      <Toaster position="top-right" duration={1000} richColors/>
      <div className="header">
        <div className="wrapper-container px-3">
          <CodeEditor setOutput = {setOutput} setProgress = {setProgress} />
          <InputBox />
        </div>

        <div className="vertical-divider px-3">
            <Dryrun />
            <Output output = {output} progess = {progress} />
        </div>
      </div>
    </>
  );
}

export default App;
