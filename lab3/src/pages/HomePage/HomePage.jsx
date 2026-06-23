import GamePreview from '../../components/GamePreview/GamePreview'
import { useGame } from '../../context/GameContext'
import styles from './HomePage.module.css'

function HomePage() {
  const { gameData } = useGame()

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>{gameData.title}</h1>

          <p className={styles.description}>
            Базова версія гри з маршрутизацією та загальним контекстом даних.
            Головна сторінка містить ігрове поле, а додаткові дані винесено на
            окремі маршрути.
          </p>

          <div className={styles.details}>
            <span>Рівень: {gameData.levelName}</span>
            <span>Складність: {gameData.difficulty}</span>
          </div>
        </div>

        <GamePreview />
      </section>
    </div>
  )
}

export default HomePage