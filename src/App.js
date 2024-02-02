import Alert from './components/Alert';
import NavBar from './components/NavBar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode=()=>{
    if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#02203d';
    showAlert('Dark mode enabled','success');
    document.title="TextUtils-Dark Mode";
    // setInterval(()=>{
    // document.title="Install TextUtils";
    // },2000);
    // setInterval(()=>{
    //   document.title="Install TextUtils now";
    //   },1500);
  }
  else
    {setmode('light');
    document.body.style.backgroundColor='white';
    showAlert('Light mode enabled','success');
    document.title="TextUtils-Light Mode";
  }
  }

  return (
    <Router>
      <NavBar title="TextUtils" about="About" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
