import { useDispatch, useSelector } from 'react-redux'
import {
  resetStats,
  selectAverageScore,
  selectBestScore,
  selectGamesPlayed,
  selectLastScore,
} from '../../store/gameSlice'
import styles from '../Page.module.css'

function StatsPage() {
  const dispatch = useDispatch()

  const bestScore = useSelector(selectBestScore)
  const lastScore = useSelector(selectLastScore)
  const gamesPlayed = useSelector(selectGamesPlayed)
  const averageScore = useSelector(selectAverageScore)

  return (
    <section className={styles.pageCard}>
      <h1>Статистика</h1>

      <p>
        Ця сторінка отримує дані з Redux store. Після завершення гри результат
        зберігається в глобальному стані та доступний на цьому маршруті.
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

      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(resetStats())}
      >
        Очистити статистику
      </button>
    </section>
  )
}

export default StatsPage