import styles from './CreateTasks.module.css'
import { PlusCircle } from 'phosphor-react'
import { EmptyList } from './EmptyList'

export function CreateTasks() {
  return (
    <div className={styles.container}>
      <div className={styles.addTask}>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button>
          Criar
          <PlusCircle
            size={16}
            color='#F2F2F2'
          />
        </button>
      </div>

      <div className={styles.taskStatus}>
        <p className={styles.statusCreated}>
          <span>Tarefas criadas </span>
          <span className={styles.statusCount}>0</span>
        </p>
        <p className={styles.statusDone}>
          <span>Concluídas </span>
          <span className={styles.statusCount}>0</span></p>
      </div>

      <EmptyList />
    </div>
  )
}