import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { combineReducers } from 'redux';

import todosReducer from './todosSlice';
import filterReducer from './filterSlice';

// 1. Комбінуємо редʼюсери (щоб було кілька гілок стану)
const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

// 2. Налаштовуємо збереження тільки todos
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos'],  // Зберігаємо тільки todos
};

// 3. Обгортаємо редʼюсер у persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Створюємо store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

// 5. Створюємо persistor для PersistGate
export const persistor = persistStore(store);
