import { useState } from 'react'
import './App.css'
import Logo from "@/components/ui/logo";
import MenuBar from './components/navigationMenu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="NavBar">
        <Logo />
        <MenuBar />
      </div>
    </>
  );
}

export default App;
