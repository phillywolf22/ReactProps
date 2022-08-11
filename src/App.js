
import "./App.css";
import Map from './Map';
import React, { useState } from "react";

import InputForm from "./InputForm";
import InputSibling from "./InputSibling";
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

  // const getNewName =()=> {
  //   return getName
  // }


  return (
    <div className="App">
        <p> this is variable from parent (App.js) : {getName} </p>
      <InputForm grabName={setNewName} name={getName} />
    <InputSibling name2={getName} />
      {/* <Map /> */}
    </div>

  
  );
}

export default App;
