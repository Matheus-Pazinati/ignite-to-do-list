import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <label>
        <Checkbox.Root className={styles.checkbox}>
          <Checkbox.Indicator>
            <Check className={styles.iconCheck}/>
          </Checkbox.Indicator>
        </Checkbox.Root>
        Lorem ipsum dolor sitLorem ipsum dolor
      </label>
      <Trash
        size={24}
        color='#808080'
      />
    </div>
  )
}