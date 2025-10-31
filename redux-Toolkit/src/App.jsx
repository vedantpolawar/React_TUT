import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
