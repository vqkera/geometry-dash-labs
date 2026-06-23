import { NavLink } from 'react-router'
import styles from './Header.module.css'

function Header() {
  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link

  return (
    <header className={styles.header}>
      <div className={styles.logo}>GD</div>

      <nav className={styles.nav}>
        <NavLink to="/" end className={getLinkClass}>
          Гра
        </NavLink>

        <NavLink to="/about" className={getLinkClass}>
          Про гру
        </NavLink>

        <NavLink to="/stats" className={getLinkClass}>
          Статистика
        </NavLink>
      </nav>
    </header>
  )
}

export default Header