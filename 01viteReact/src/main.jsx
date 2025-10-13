import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
// function MyAPP() {
//   return (
//     <div>
//       <h1>Custom hello APP</h1>
//     </div>
//   );
// }
// // what if we pass our own reactelement
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// }; we can use our own element in render function as it is having some rule for parameter;
const anotherUser = "Vedant ";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com" },
  "click me to visit google ",
  anotherUser
);
//one more just for example
const myElement = React.createElement(
  "div",
  { id: "container", style: { backgroundColor: "purple", padding: "`10px" } },
  React.createElement("h2", null, "Welcome to React"),
  React.createElement("p", null, "This was created using react Element")
);
createRoot(document.getElementById("root")).render(
  <StrictMode>{myElement}</StrictMode>
);
createRoot(document.getElementById("root1")).render(reactElement);
