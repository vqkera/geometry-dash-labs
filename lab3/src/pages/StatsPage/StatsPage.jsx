import { useGame } from '../../context/GameContext'
import styles from '../Page.module.css'

function StatsPage() {
  const { bestScore, lastScore, gamesPlayed, averageScore, resetStats } =
    useGame()

  return (
    <section className={styles.pageCard}>
      <h1>Статистика</h1>

      <p>
        Ця сторінка отримує дані з контексту гри. Після завершення гри
        результат зберігається в загальному стані та доступний на цьому
        маршруті.
      </p>

      <div className={styles.statsGrid}>
        <article className={styles.statCard}>
          <span>Рекорд</span>
          <strong>{bestScore}</strong>
        </article>

        <article className={styles.statCard}>
          <span>Останній рахунок</span>
          <strong>{lastScore}</strong>
        </article>

        <article className={styles.statCard}>
          <span>Ігор зіграно</span>
          <strong>{gamesPlayed}</strong>
        </article>

        <article className={styles.statCard}>
          <span>Середній рахунок</span>
          <strong>{averageScore}</strong>
        </article>
      </div>

      <button className={styles.button} type="button" onClick={resetStats}>
        Очистити статистику
      </button>
    </section>
  )
}

export default StatsPage