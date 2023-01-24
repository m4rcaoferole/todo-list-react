import { IListTaskProps } from '../../App';
import { Task } from '../Task';
import styles from './Tasks.module.css';

interface TasksProps {
  tasks: IListTaskProps[];
  onDelete: (idTask: string) => void;
  onComplete: (idTask: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: TasksProps) {
  const amountTasks = tasks.length;
  const tasksIsCompleted = tasks.filter((task) => task.completed === true).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{amountTasks}</span>
        </div>

        <div>
          <p className={styles.taskCompleted}>Concluídas</p>
          <span>
            {tasksIsCompleted} de {amountTasks}
          </span>
        </div>
      </header>

      <div className={styles.tasksList}>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />;
        })}
      </div>
    </section>
  );
}
