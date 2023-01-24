import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

import './global.css';

export interface IListTaskProps {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<IListTaskProps[]>([
    {
      id: uuidv4(),
      title: 'Task 1',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Task 2',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Task 3',
      completed: true,
    },
  ]);

  function addNewTask(newTask: string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: newTask,
        completed: false,
      },
    ]);
  }

  return (
    <div>
      <Header onAddNewTask={addNewTask} />

      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
