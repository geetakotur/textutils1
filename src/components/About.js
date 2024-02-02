import React from 'react';
import '../App.css';

export default function About(props) {
  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1 style={{ fontSize: '30px' }}>About Us</h1>
      <center>
        <img src="t2.png" height={300} width={300} alt="..." />
      </center>
      <p style={{ fontSize: '20px' }}>
        <strong>TextUtils is simply a set of utility functions to do operations on String objects.</strong>
        <br></br>
        It is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button.
      </p>
    </div>
  );
}


