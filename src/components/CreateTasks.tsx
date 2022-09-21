// import { EmptyList } from './EmptyList'
import { Task } from './Task'

import styles from './CreateTasks.module.css'
import { PlusCircle } from 'phosphor-react'


export function CreateTasks() {
  return (
    <div className={styles.container}>
      <form className={styles.addTask}>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button type='submit'>
          Criar
          <PlusCircle
            size={16}
            color='#F2F2F2'
          />
        </button>
      </form>

      <div className={styles.taskStatus}>
        <p className={styles.statusCreated}>
          <span>Tarefas criadas </span>
          <span className={styles.statusCount}>0</span>
        </p>
        <p className={styles.statusDone}>
          <span>Concluídas </span>
          <span className={styles.statusCount}>0</span></p>
      </div>

      <Task />
      <Task />
      <Task />
    </div>
  )
}