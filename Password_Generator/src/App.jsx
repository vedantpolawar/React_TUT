import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  //useRef HOOK
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += " !#$%&'()*+,-./:;<=>?@[^_`{|}~";
    }
    for (let i = 0; i <= length; i++) {
      let char_idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(char_idx);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-6 my-10 bg-gray-800 text-orange-400">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Password Generator
        </h1>

        {/* Password Display + Copy Button */}
        <div className="flex items-center shadow rounded-lg overflow-hidden mb-6 bg-amber-50">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-transparent text-gray-800 placeholder:text-gray-500"
            placeholder="Your generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-amber-200 hover:bg-amber-300 transition text-orange-600 px-4 py-2 font-medium"
          >
            Copy
          </button>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {/* Length */}
          <div className="flex items-center justify-between">
            <label htmlFor="lengthRange" className="font-medium text-sm">
              Length: <span className="font-bold">{length}</span>
            </label>
            <input
              id="lengthRange"
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer accent-orange-500 w-2/3"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Numbers */}
          <div className="flex items-center justify-between">
            <label htmlFor="numberInput" className="text-sm font-medium">
              Include Numbers
            </label>
            <input
              type="checkbox"
              id="numberInput"
              className="w-5 h-5 accent-orange-500 cursor-pointer"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
          </div>

          {/* Characters */}
          <div className="flex items-center justify-between">
            <label htmlFor="charInput" className="text-sm font-medium">
              Include Special Characters
            </label>
            <input
              type="checkbox"
              id="charInput"
              className="w-5 h-5 accent-orange-500 cursor-pointer"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
