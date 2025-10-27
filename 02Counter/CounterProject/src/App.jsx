import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 8;
  let [counter, setCounter] = useState(7); //use state is one of the hook in react it is used to change the state of variav=ble in ui
  // useState is a React Hook that lets you create and manage state in a functional component.
  // It returns an array with two elements:
  // [0] - the current state value
  // [1] - a function to update that state value and re-render the component
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log("valueAdded", counter);
  };
  function decVal() {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
    console.log("Value substracted", counter);
  }
  return (
    <>
      <h1>REact and all</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decVal}>remove Value</button>
    </>
  );
}

export default App;
