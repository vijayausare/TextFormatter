// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const[mode, setMode] =useState('light');
  const[alert, setAlert] =useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
}
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark'); 
      document.body.style.backgroundColor= '#021216';
      showAlert("Dark mode has been enabled !", "success");
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled !", "success");

    }

  }
  return (
    <>
    <Navbar title = "TEXTFORMAT" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Textform title= "Enter Text Here "  showAlert= {showAlert} mode={mode} />
   

    </>
  );
}

export default App;
