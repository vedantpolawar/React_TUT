import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../components/card";
function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    userName: "Vedant",
    age: 19,
  };
  return (
    <>
      <h1 className="bg-gradient-to-r from-red-200 vi-yellow-50 to-green-50 border-amber-50-4 p-3 m-4 text-black rounded-2xl">
        Tailwind Test
      </h1>
      <Card userName="Vedant" someObject={myObj} />
    </>
  );
}

export default App;
