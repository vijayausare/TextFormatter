import React, {useState} from 'react'

export default function Textform(props) {
const handleUpClick= ()=>{
   // console.log("upper case was clicked "); 
    let newText = text.toUpperCase(); 
    setText(newText);
    newText.length>1 && props.showAlert("Converted to Uppercase !", "success");
}
const handleLoClick= ()=>{
    // console.log("upper case was clicked "); 
     let newText = text.toLowerCase(); 
     setText(newText);
     newText.length>1 && props.showAlert("Converted to Lowercase !", "success");
 }
 const handleClearClick= ()=>{
    // console.log("upper case was clicked "); 
     let newText = '';
     setText(newText);
     props.showAlert("Text Cleared !", "warning ");
 }
 
const handleOnChange= (event)=>{
    //console.log("upper case was clicked "); 
    setText(event.target.value); 
     props.showAlert("Typing..... !", "info");
}

const handleCopy=()=>{
    var text = document.getElementById("myBox"); 
    text.select(); 
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard !", "primary");
}
const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/); 
    setText(newText.join(" ")); 
    props.showAlert("Removed Extra Spaces ! ", "success");
}
const[text , setText]=useState(""); 
  return (
    <>
        <div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}> 
            <h1> {props.title}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#021216':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>

            </div >
            <button  disabled={text.length===0} onClick={handleClearClick} className="btn btn-danger mx-1 my-1">Clear</button>
            <button disabled={text.length===0} onClick={handleCopy} className="btn btn-success mx-1 my-1">Copy</button>
            <button  disabled={text.length===0}  onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Space</button>
            <button disabled={text.length===0}  onClick={handleUpClick} className="btn btn-primary mx-1 my-1">Covert To Uppercase</button>
            <button  disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary mx-1 my-1">Covert To Lowercase</button>
        </div>
        <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
            <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"You can see preview of text here "}</p>
        </div>


        </div>
    </>
  )
}
