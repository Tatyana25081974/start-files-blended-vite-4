import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',   // Назва цього шматочка стану
  initialState: '', // Початкове значення фільтра — пуста строка
  reducers: {
    setFilter(state, action) {
      return action.payload;  // просто замінюємо значення фільтра на те, що передали
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
