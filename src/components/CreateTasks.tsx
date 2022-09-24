// import { EmptyList } from './EmptyList'
import { ChangeEvent, FormEvent, useState } from 'react'

import { Task } from './Task'

import styles from './CreateTasks.module.css'
import { PlusCircle } from 'phosphor-react'

interface NewTaskProps {
  content: string;
  isComplete: boolean;
}

export function CreateTasks() {
const [tasks, setTasks] = useState<NewTaskProps[]>([])

const [newTask, setNewTask] = useState<NewTaskProps>({content: '', isComplete: false})

function handleNewTask(event: ChangeEvent<HTMLInputElement> ) {
  event.preventDefault()
  setNewTask({
    content: event.target.value,
    isComplete: false
  })
}

function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  setTasks([...tasks, newTask])
  setNewTask({
    content: '',
    isComplete: false
  })
}

function checkTask(id: string) {
  const tasksChecked = tasks.map((task) => {
    if (task.content === id) {
      return (
        {
          content: task.content,
          isComplete: !task.isComplete
        }
      )
    } else {
      return (
        {
          content: task.content,
          isComplete: task.isComplete
        }
      )
    }
  })
  setTasks(tasksChecked)
}

const checkedTasks = tasks.filter((task) => {
  return task.isComplete === true;
})

  return (
    <div className={styles.container}>
      <form 
        className={styles.addTask}
        onSubmit={handleCreateNewTask}
      >
        <input
         type="text" 
         placeholder='Adicione uma nova tarefa'
         value={newTask.content}
         onChange={handleNewTask}
        />
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
          <span>Tarefas criadas</span>
          <span className={styles.statusCount}>{tasks.length}</span>
        </p>
        <p className={styles.statusDone}>
          <span>Concluídas</span>
          <span className={styles.statusCount}>{checkedTasks.length}</span></p>
      </div>
        {tasks.map((task) => {
          return (
           <Task 
            content={task.content} 
            key={task.content} 
            completed={task.isComplete}
            onCheck={checkTask} 
           />
          )
        })}
    </div>
  )
}