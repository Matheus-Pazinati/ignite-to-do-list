import { ClipboardText } from 'phosphor-react'

import styles from './EmptyList.module.css'

export function EmptyList() {
  return (
    <div className={styles.container}>
      <ClipboardText
        size={56}
        color='#333333'
      />
      <div>
        <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
        <p className={styles.subtitle}>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}