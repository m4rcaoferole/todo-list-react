import { ChangeEvent, useState } from 'react';
import { Trash } from 'phosphor-react'
import { IListTaskProps } from '../../App'

import styles from "./Task.module.css"

interface TaskProps {
  task: IListTaskProps;
  onDelete: (idTask: string) => void;
  onComplete: (idTask: string) => void;
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  const [checked, setChecked] = useState(false)

  function handleRadio(event: ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked)
    onComplete(task.id)
  }

  return (
    <div className={styles.task}>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleRadio}
        value={task.id}
      />

      <p className={checked ? styles.checkedTask : ""}>{task.title}</p>

      <button onClick={() => onDelete(task.id)}>
        <Trash size={18}/>
      </button>
    </div>
  )
}