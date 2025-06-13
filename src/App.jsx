import { useState } from 'react'
import './App.css'
import Logo from "@/components/ui/logo";
import MenuBar from './components/navigationMenu';
import CodeEditor from './components/editor';
import Output from './components/output';
import Dryrun from './components/dryrun';
import InputBox from './components/inputBox';


function App() {
  return (
    <>
      <div className="NavBar">
        <Logo />
        <MenuBar/>
      </div>
  
      <div className="header">
        <div className="wrapper-container">
          <CodeEditor />
          <InputBox />
        </div>

        <div className="vertical-divider">
            <Dryrun />
            <Output output={"Hello"}/>
        </div>
      </div>
    </>
  );
}

export default App;
