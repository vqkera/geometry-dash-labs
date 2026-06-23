import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>GD</div>
      <nav className={styles.nav}>
        <span>Проєкт</span>
        <span>Архітектура</span>
        <span>Стилізація</span>
      </nav>
    </header>
  )
}

export default Header