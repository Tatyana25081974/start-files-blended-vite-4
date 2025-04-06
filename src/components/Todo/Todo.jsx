import { useDispatch } from 'react-redux';
import { deleteTodo, setCurrentTodo } from '../../redux/todosSlice';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri'; // Іконки для кнопок
import  Text  from '../Text/Text';
import GridItem from '../GridItem/GridItem';
import css from './Todo.module.css';

const Todo = ({ id, text, counter }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id)); // Видалити по ID
  };

  const handleEdit = () => {
    dispatch(setCurrentTodo({ id, text })); // Встановити тудушку для редагування
  };

  return (
    <GridItem>
      <div className={css.box}>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>

        <button type="button" className={css.deleteButton} onClick={handleDelete}>
          <RiDeleteBinLine size={24} />
        </button>

        <button type="button" className={css.editButton} onClick={handleEdit}>
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};

export default Todo;

