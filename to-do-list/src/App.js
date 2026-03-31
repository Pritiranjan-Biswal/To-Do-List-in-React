import { useReducer } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { tasksReducer, initialTasks } from './components/tasksReducer';

let nextId = 3;

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task,
    });
  }

  function handleDeleteTask(id) {
    dispatch({
      type: 'deleted',
      id,
    });
  }

  return (
    <div>
      <h1>Task App</h1>

      <AddTask onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}