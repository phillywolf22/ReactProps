
import Grandchild from "./Grandchild";

const InputForm = props => {
  const changeName = e => {
    props.grabName(e.target.value);
  };

  const alertMessage = e => {
    alert(`${props.name()} , welcome to my react app`);
    console.log(props.name());
    console.log("test add from git");
  };

  const passToGC = () => {
    return props.name()
  } 

  const variable1 = 'test pass the variable'

  return (
    <div>
      <form>
        <p>from child :</p>
        <label>Enter your Name: </label>
        <input type="text" onChange={changeName}></input>
        <button type="button" onClick={alertMessage}>
          Submit
        </button>
        <Grandchild nameGC= {passToGC} var1 = {variable1} />
      </form>
    </div>
  );
};

export default InputForm;
