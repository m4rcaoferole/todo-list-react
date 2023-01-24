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
  const [tasks, setTasks] = useState<IListTaskProps[]>([]);

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

  function onDeleteTask(idTask: string) {
    const newTask = tasks.filter((task) => task.id !== idTask);
    setTasks(newTask);
  }

  function onCompletedTask(idTask: string) {
    const newTask = tasks.map((task) => {
      if (task.id === idTask) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(newTask);
  }

  return (
    <div>
      <Header onAddNewTask={addNewTask} />

      <Tasks tasks={tasks} onDelete={onDeleteTask} onComplete={onCompletedTask} />
    </div>
  );
}

export default App;
