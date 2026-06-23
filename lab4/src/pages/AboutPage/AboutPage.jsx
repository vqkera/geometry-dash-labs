import { useSelector } from 'react-redux'
import { selectGameData } from '../../store/gameSlice'
import styles from '../Page.module.css'

function AboutPage() {
  const gameData = useSelector(selectGameData)

  return (
    <section className={styles.pageCard}>
      <h1>Про гру</h1>

      <p>
        Тема проєкту — {gameData.theme}. Основні дані гри зберігаються у Redux
        store, тому їх можна використовувати на різних сторінках додатку без
        дублювання коду.
      </p>

      <div className={styles.grid}>
        <article className={styles.infoBlock}>
          <h2>Основні дані</h2>

          <ul>
            <li>Назва: {gameData.title}</li>
            <li>Персонаж: {gameData.playerName}</li>
            <li>Рівень: {gameData.levelName}</li>
            <li>Складність: {gameData.difficulty}</li>
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