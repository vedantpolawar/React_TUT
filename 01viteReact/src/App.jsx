import TempFunc from "./temp";
const anotherUser = "Vedant";
function App() {
  return (
    <>
      <TempFunc />
      <p>React is interesting {username}</p>
      <button>Click here</button>
    </>
  );
}

// Point to note:
// While returning, React components must return only ONE element.
// Fragments (<></>) let us group multiple elements without extra <div>s.

export default App;
