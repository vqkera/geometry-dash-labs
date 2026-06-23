import { NavLink } from 'react-router'
import styles from '../Page.module.css'

function NotFoundPage() {
  return (
    <section className={styles.pageCard}>
      <h1>Сторінку не знайдено</h1>

      <p>
        Такого маршруту в додатку немає. Поверніться на головну сторінку з
        грою.
      </p>

      <NavLink className={styles.buttonLink} to="/">
        До гри
      </NavLink>
    </section>
  )
}

export default NotFoundPage