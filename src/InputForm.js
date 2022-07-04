import React, { useState } from "react";

const InputForm = props => {
  const changeName = e => {
    props.grabName(e.target.value);
  };

  const alertMessage = e => {
    alert(`${props.name()} , welcome to my react app`);
    console.log(props.name());
    console.log("test add from git");
  };

  return (
    <div>
      <form>
        <label>Enter your Name: </label>
        <input type="text" onChange={changeName}></input>s
        <button type="button" onClick={alertMessage}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
