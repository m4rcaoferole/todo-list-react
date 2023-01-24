import { IListTaskProps } from "../../App";
import { Task } from "../Task"
import styles from "./Tasks.module.css"

interface TasksProps {
  tasks: IListTaskProps[];
}

export function Tasks(props: TasksProps) {

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>

        <div>
          <p className={styles.taskCompleted}>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>

      <div className={styles.tasksList}>
        { props.tasks.map( task => {
          return <Task key={task.id} task={task} />
        })}
      </div>
    </section>
  )
};