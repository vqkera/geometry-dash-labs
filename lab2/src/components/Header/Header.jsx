import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>GD</div>

      <nav className={styles.nav}>
        <span>Гра</span>
        <span>Компоненти</span>
        <span>Хуки</span>
      </nav>
    </header>
  )
}

export default Header