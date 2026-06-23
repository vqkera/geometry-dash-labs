import { useSelector } from 'react-redux'
import { selectGameData, selectPlayerProfile } from '../../store/gameSlice'
import styles from '../Page.module.css'

function AboutPage() {
  const gameData = useSelector(selectGameData)
  const playerProfile = useSelector(selectPlayerProfile)

  return (
    <section className={styles.pageCard}>
      <h1>Про гру</h1>

      <p>
        Тема проєкту — {gameData.theme}. У цій версії додано форму
        налаштування гравця за допомогою React Hook Form. Введені дані
        зберігаються у Redux store.
      </p>

      <div className={styles.grid}>
        <article className={styles.infoBlock}>
          <h2>Поточний гравець</h2>

          <ul>
            <li>Ім’я: {playerProfile.playerName}</li>
            <li>Складність: {playerProfile.difficulty}</li>
            <li>Персонаж: {gameData.playerName}</li>
            <li>Рівень: {gameData.levelName}</li>
          </ul>
        </article>

        <article className={styles.infoBlock}>
          <h2>Керування</h2>

          <ul>
            {gameData.controls.map((control) => (
              <li key={control}>{control}</li>
            ))}
          </ul>
        </article>

        <article className={styles.infoBlock}>
          <h2>Технології</h2>

          <ul>
            {gameData.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default AboutPage