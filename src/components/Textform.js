import React,{useState} from 'react'


export default function Textform(props)
 {
  const handleChange = (e) => {
    settext(e.target.value)
    
    };
    
    const handleclick = () => {
    let newtext=text.toUpperCase();
    settext(newtext);
    props.showAlert('Text converted to uppercase','success');
    };

    const handleclick1=()=>{
      let newtext=text.toLowerCase();
      settext(newtext);
      props.showAlert('Text converted to lowercase','success');
    };

    const handleclick2=()=>{
      let newtext="";
      settext(newtext);
      props.showAlert('Text cleared','success');
    };

    const handleclick3 = () => {
      let newtext = "";
      for (let i = text.length-1; i >=0; i--) {
        let ch = text.charAt(i);
        newtext = newtext + ch;
      }
      settext(newtext);
      props.showAlert('Text reversed','success');
    };

    const handleclick4 = () => {
      let newtext = text.split(/[ ]+/);
      settext(newtext.join(" "));
      props.showAlert('Blank space removed','success');
    };
    

  const [text,settext]=useState("Enter your text");
  return (
    <>
    
      <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <textarea className="form-control" id="Mybox" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'#055160':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
        <br></br>
   <button className="btn btn-success mx-1 my-1" onClick={handleclick}>Convert to uppercase</button>
   &nbsp;
   <button className="btn btn-primary mx-1 my-1" onClick={handleclick1}>Convert to lowercase</button>
  
   &nbsp;
   <button className="btn btn-secondary mx-1 my-1" onClick={handleclick3}>Reverse Text</button>
   &nbsp;
   <button className="btn btn-warning mx-1 my-1" onClick={handleclick4}>Remove Extra Spaces</button>
   &nbsp;
   <button className="btn btn-danger mx-1 my-1" onClick={handleclick2}>Clear Text</button>
    </div>

    <div className="summary my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
      <p>{text.split(/\s+/).length-1} words,{text.length} characters</p>       { /*or text.split(" ").filter((element)=>{element.length!=0})*/}
      <p>{text.length>0?text.split(" ").length*(0.008):0} minutes to read</p>
      <h2>text preview</h2>
      <p>{text.length>0?text:"Enter something in the above box to preview"}</p>
    </div>
    </>
  )
}
