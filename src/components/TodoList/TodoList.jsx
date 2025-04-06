

import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import { selectFilteredTodos } from '../../redux/selectors';
import css from './TodoList.module.css';

export default function TodoList() {
  const todos = useSelector(selectFilteredTodos); // Отримуємо відфільтровані тудушки

  return (
    <ul className={css.list}>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          id={todo.id}
          counter={index + 1}
          text={todo.text}
        />
      ))}
    </ul>
  );
}
