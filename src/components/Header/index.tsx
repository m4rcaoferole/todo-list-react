import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import toDoLogo from '../../assets/Logo.svg';

import styles from './header.module.css';

interface HeaderProps {
  onAddNewTask: (newTask: string) => void;
}

export function Header({ onAddNewTask }: HeaderProps) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if(!newTask) {
      return alert('Por favor, preencha uma nova tarefa.')
    }

    onAddNewTask(newTask);
    setNewTask("");
  }

  function handleChangeTask(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  return (
    <div className={styles.header}>
      <img src={toDoLogo} />

      <form className={styles.newTask} onSubmit={handleSubmit}>
        <input
          className={styles.inputNewTask}
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleChangeTask}
        />

        <button className={styles.buttonNewTask}>
          Criar
          <PlusCircle size={24}/>
        </button>
      </form>
    </div>
  );
}
