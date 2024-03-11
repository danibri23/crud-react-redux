import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

function App() {

  const tasksState = useSelector((state) => state.tasks)

  return (
    <div className="App">
      <h1>Hola Mundo !</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
