import { useSelector } from 'react-redux'
import GamePreview from '../../components/GamePreview/GamePreview'
import { selectGameData } from '../../store/gameSlice'
import styles from './HomePage.module.css'

function HomePage() {
  const gameData = useSelector(selectGameData)

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>{gameData.title}</h1>

          <p className={styles.description}>
            Базова версія гри з маршрутизацією та глобальним станом Redux.
            Дані гри та статистика зберігаються у Redux store.
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