import Section from './components/Section/Section';
import Heading from './components/Heading/Heading';
import Form from './components/Form/Form';
import EditForm from './components/EditForm/EditForm';
import TodoList from './components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { selectCurrentTodo } from './redux/selectors';
import './App.css'; // тут контейнер

function App() {
  const currentTodo = useSelector(selectCurrentTodo);

  return (
    <Section>
      <div className="container">
        <Heading level={1}>Мій TODO List</Heading>
        {currentTodo ? <EditForm /> : <Form />}
      </div>

      {/* Тут уже без контейнера, на всю ширину */}
      <TodoList />
    </Section>
  );
}

export default App;
