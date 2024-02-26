import { createSlice } from "@reduxjs/toolkit";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdef", 4);

const initialState = [
  {
    id: 1,
    title: "running",
    completed: false,
  },
  {
    id: 2,
    title: "basketball",
    completed: false,
  },
  {
    id: 3,
    title: "swimming",
    completed: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload,
        completed: false,
      };
      return [...state, newTodo];
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
