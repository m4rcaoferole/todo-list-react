import { useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import "./global.css";

export interface IListTaskProps {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<IListTaskProps[]>([
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      completed: true,
    }
  ])

  return (
    <div>
      <Header />

      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
