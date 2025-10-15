import { useState } from "react";

function App() {
  // State to hold the current background color, with "olive" as the default.
  const [color, setColor] = useState("green");

  return (
    <div
      className="  w-screen h-screen duration-300 flex flex-col justify-center items-center gap-10"
      style={{ backgroundColor: color }}
    >
      <div className="bg-amber-100 rounded-3xl p-6 shadow-lg">
        <h1 className="text-black text-2xl font-semibold">
          Background Color Changer
        </h1>
      </div>
      <div className="bg-amber-100 flex p-3 gap-1 rounded-2xl">
        <button
          className="bg-blue-600 "
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>
        <button
          className="bg-red-600 "
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>
        <button
          className="bg-yellow-300 "
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="bg-green-700 "
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          className="bg-emerald-200 "
          onClick={() => {
            setColor("#34D399");
          }}
        >
          emerald
        </button>
        <button
          className="bg-amber-900"
          onClick={() => {
            setColor("#78350f");
          }}
        >
          Brown
        </button>
        <button
          className="bg-fuchsia-800 "
          onClick={() => {
            setColor("fuchsia");
          }}
        >
          pink
        </button>
      </div>
    </div>
  );
}

export default App;
