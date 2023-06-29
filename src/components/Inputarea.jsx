import React, { useState } from 'react';

const Inputarea = (props) => {

  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    console.log(newValue);
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}>
        <span>Add</span>
      </button>
    </div>
  )
}

export default Inputarea