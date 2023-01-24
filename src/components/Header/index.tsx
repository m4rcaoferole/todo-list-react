import { PlusCircle } from 'phosphor-react'

import toDoLogo from '../../assets/Logo.svg';

import styles from './header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={toDoLogo} />

      <form className={styles.newTask}>
        <input className={styles.inputNewTask} placeholder='Adicione uma nova tarefa'/>

        <button className={styles.buttonNewTask} type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
