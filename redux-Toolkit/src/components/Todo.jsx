import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Local states for editing
  const [editingId, setEditingId] = useState(null);
  const [updatedText, setUpdatedText] = useState("");
  const inputRef = useRef(null);

  // Auto-focus input when edit mode starts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingId]);

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setUpdatedText(todo.text);
  };

  const handleUpdate = (id) => {
    if (updatedText.trim() !== "") {
      dispatch(updateTodo({ id, newText: updatedText }));
      setEditingId(null);
      setUpdatedText("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Todos</h2>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <>
                <input
                  ref={inputRef}
                  type="text"
                  value={updatedText}
                  onChange={(e) => setUpdatedText(e.target.value)}
                  className="text-black px-2 py-1 rounded w-2/3"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="text-white bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-gray-600 rounded text-md"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditClick(todo)}
                    className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
