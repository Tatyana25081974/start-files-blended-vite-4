
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo, clearCurrentTodo } from '../../redux/todosSlice';
import { selectCurrentTodo } from '../../redux/selectors';
import css from './EditForm.module.css';

export default function EditForm() {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo); // отримуємо що редагуємо
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const text = form.elements.text.value.trim();

    if (text === '') {
      alert('Поле не може бути пустим!');
      return;
    }

    dispatch(updateTodo({ id: currentTodo.id, text })); // оновлюємо текст задачі
    form.reset();
  };

  const handleCancel = () => {
    dispatch(clearCurrentTodo()); // відміняємо редагування
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="text"
        defaultValue={currentTodo.text} // початковий текст задачі
        placeholder="Відредагуйте завдання"
      />

      <div className={css.buttons}>
        <button type="submit" className={css.saveButton}>
          Зберегти
        </button>
        <button type="button" onClick={handleCancel} className={css.cancelButton}>
          Відмінити
        </button>
      </div>
    </form>
  );
}

