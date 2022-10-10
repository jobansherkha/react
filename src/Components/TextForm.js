import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
export default function TexthtmlForm(props) {
  const [Text, setText] = useState("Enter text here");
  const handleClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = ()=>{
    setText("")
  }

  return (
    <>
    <div className="container">
      <div className="container mb-3">
        <h1> {props.heading}</h1>
        <label htmlFor="myBox" className="htmlForm-label">
          
        </label>
        <textarea
          type="text"
          className="form-control"
          value={Text}
          onChange={handleOnChange}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          rows="8"
        />
      </div>
      <button className="btn btn-primary mx-1" onClick={handleClick}>
       Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
       Convert to Lower Case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
       Clear Text 
      </button>
      </div>

      <div className="container my-5">
        <h3>Your text summary </h3>
        <p>number of characters : {Text.length}</p>
        <p>number of words  : {Text.split(" ").length-1}</p>
        <h4>preview text </h4>
        <p>{Text}</p>
      </div>
    </>
  );
}
TexthtmlForm.prototype = {
  heading: PropTypes.string,
};
