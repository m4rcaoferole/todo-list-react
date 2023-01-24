import { Trash } from 'phosphor-react'
import { IListTaskProps } from '../../App'

import styles from "./Task.module.css"

interface TaskProps {
  task: IListTaskProps;
}

export function Task(props: TaskProps) {

  return (
    <div className={styles.task}>
      <input type='radio' />

      <p>
        {props.task.title}
      </p>

      <button>
        <Trash size={18}/>
      </button>
    </div>
  )
}