// import { EmptyList } from './EmptyList'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Task } from './Task';

import styles from './CreateTasks.module.css';
import { PlusCircle } from 'phosphor-react';
import { EmptyList } from './EmptyList';

interface NewTaskProps {
  id: string;
  content: string;
  isComplete: boolean;
}

export function CreateTasks() {

  const task: NewTaskProps = {
    id: uuidv4(),
    content: '',
    isComplete: false
  }

  const [tasks, setTasks] = useState<NewTaskProps[]>([])

  const [newTask, setNewTask] = useState<NewTaskProps>(task)

  const hasTasks = tasks.length > 0;

  function handleInvalidMessageSent(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('O campo está vazio! Insira algum texto.')
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement> ) {
    event.preventDefault()
    setNewTask({
      ...task,
      content: event.target.value
    })
    event.target.setCustomValidity('')
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTasks([...tasks, newTask])
    setNewTask({
      ...task,
      content: ''
    })
  }

  function checkTask(id: string) {
    const tasksChecked = tasks.map((task) => {
      if (task.id === id) {
        return (
          {
            ...task,
            isComplete: !task.isComplete
          }
        )
      } else {
        return (
          {...task}
        )
      }
    })
    setTasks(tasksChecked)
  }

  function deleteTask(id: string) {
    const tasksListWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(tasksListWithoutDeletedOne)
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
          required
          onInvalid={handleInvalidMessageSent}
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
            <span className={styles.statusCount}>{`${checkedTasks.length} de ${tasks.length}`}</span>
          </p>
      </div>
      {hasTasks ? 
        tasks.map((task) => {
          return (
            <Task 
              id={task.id}
              key={task.id} 
              content={task.content} 
              completed={task.isComplete}
              onCheck={checkTask} 
              onDelete={deleteTask}
            />
          )
        })
        : 
          <EmptyList />}
    </div>
  )
}