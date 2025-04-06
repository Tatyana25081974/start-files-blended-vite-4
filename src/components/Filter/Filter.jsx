

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filtersSlice';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch(); // отримуємо функцію dispatch
  const filter = useSelector(selectFilter); // беремо значення фільтра зі store

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value)); // змінюємо фільтр у Redux
  };

  return (
    <input
      type="text"
      className={css.input}
      value={filter}
      onChange={handleChange}
      placeholder="Пошук задач..."
    />
  );
}
