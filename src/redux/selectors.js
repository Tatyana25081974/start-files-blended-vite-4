

import { createSelector } from '@reduxjs/toolkit';

// 1. Просто беремо масив тудушок
export const selectTodos = state => state.todos.items;

// 2. Просто беремо текст фільтра
export const selectFilter = state => state.filter;

// 3. Просто беремо поточну тудушку для редагування
export const selectCurrentTodo = state => state.todos.currentTodo;

// 4. Мемоізований селектор: фільтруємо тудушки по фільтру
export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
