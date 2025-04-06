import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentTodo: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.items.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
      state.currentTodo = null;
    },
    clearCurrentTodo: (state) => {
      state.currentTodo = null;
    },
  },
});

export const { addTodo, deleteTodo, setCurrentTodo, updateTodo, clearCurrentTodo } = todosSlice.actions;

export default todosSlice.reducer;


