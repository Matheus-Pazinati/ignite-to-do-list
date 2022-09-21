import styles from './Header.module.css'

import logoImg from '../images/todo-logo.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logoImg} alt="Logotipo da ToDo List" />
    </div>
  )
}