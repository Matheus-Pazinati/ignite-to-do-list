import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react'

import styles from './Task.module.css'

interface TaskProps {
  id: string
  content: string;
  completed: boolean;
  onCheck: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Task({ id, content, completed, onCheck, onDelete }: TaskProps) {

  function handleCheckTask() {
    onCheck(id)
  }

  function handleDeleteTask() {
    onDelete(id)
  }

  return (
    <div className={styles.task}>
      <label>
        <Checkbox.Root
         className={styles.checkbox}
         checked={completed}
         onCheckedChange={handleCheckTask}
        >
          <Checkbox.Indicator>
            <Check className={styles.iconCheck}/>
          </Checkbox.Indicator>
        </Checkbox.Root>
        {content}
      </label>
      <Trash
        size={24}
        className={styles.deleteIcon}
        onClick={handleDeleteTask}
      />
    </div>
  )
}