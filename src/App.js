import "./App.css";
// import Aboutus from './Components/Aboutus';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";

function App() {
   const [mode,setmode] = useState('light')
   
   
   const toogleMode = ()=>{
    if(mode === "light"){
      setmode('dark')
      document.body.style.backgroundColor = "#495057"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white"

      }
    
   }
  return (
    <>
      <Navbar title="Text Utils"  mode = {mode} toogleMode = {toogleMode}/>
      {/* <Aboutus/> */} 
      <TextForm  mode = {mode}/>
    </>
  );
}

export default App;
