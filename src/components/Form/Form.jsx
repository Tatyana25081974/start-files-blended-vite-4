
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosSlice';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const text = form.elements.text.value.trim();

    if (text === '') {
      alert('Введіть текст завдання!');
      return;
    }

    const newTodo = {
      id: nanoid(),       // створюємо унікальний id
      text,               // текст тудушки
    };

    dispatch(addTodo(newTodo)); // відправляємо в Redux
    form.reset();               // очищаємо форму
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="text"
        placeholder="Введіть завдання"
      />
      <button className={css.button} type="submit">
        Додати
      </button>
    </form>
  );
}

