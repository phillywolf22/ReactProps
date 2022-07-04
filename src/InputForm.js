import React, { useState } from "react";

const InputForm = props => {
  const changeName = e => {
    props.grabName(e.target.value);
  };

  return (
    <div>
      <form>
        <label>Enter your Name: </label>
        <input type="text" onChange={changeName}></input>
        <button type="button" onClick={changeName}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
