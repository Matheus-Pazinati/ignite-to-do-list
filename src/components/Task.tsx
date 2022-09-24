import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react'

import styles from './Task.module.css'

interface TaskProps {
  content: string;
  completed: boolean;
  onCheck: (content: string) => void
}

export function Task({ content, completed, onCheck }: TaskProps) {

  function handleCheck() {
    onCheck(content)
  }

  return (
    <div className={styles.task}>
      <label>
        <Checkbox.Root
         className={styles.checkbox}
         checked={completed}
         onCheckedChange={handleCheck}
        >
          <Checkbox.Indicator>
            <Check className={styles.iconCheck}/>
          </Checkbox.Indicator>
        </Checkbox.Root>
        {content}
      </label>
      <Trash
        size={24}
        color='#808080'
      />
    </div>
  )
}