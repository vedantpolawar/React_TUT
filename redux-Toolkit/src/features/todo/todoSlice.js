import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "helll" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(() => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});
// updateTodo: (state, action) => {
//   state.todos = state.todos.map((todo) => {
//     if (todo.id === action.payload.id) {
//       return { ...todo, text: action.payload.text };
//     }
//     return todo;
//   });
// },

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
// actinos is use to export or take reducre

export default todoSlice.reducer;
