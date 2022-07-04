import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

import InputForm from "./InputForm";
function App() {
  const [getName, setName] = useState("Phil");

  const setNewName = name => {
    // if (getName === "Phil") {
    //   setName(name);
    // } else {
    //   setName("Phil");
    // }

    setName(name);
  };
  return (
    <div className="App">
      <InputForm grabName={setNewName} name={getName} />
      <p> this is {getName} </p>
    </div>
  );
}

export default App;
