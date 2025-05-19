import { useState } from 'react'
import './App.css'
import Logo from "@/components/ui/logo";
import MenuBar from './components/navigationMenu';
import CodeEditor from './components/Editor';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="NavBar">
        <Logo />
        <MenuBar/>
      </div>
      <CodeEditor />
    </>
  );
}

export default App;
