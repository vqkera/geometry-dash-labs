import { useSelector } from 'react-redux'
import GamePreview from '../../components/GamePreview/GamePreview'
import PlayerForm from '../../components/PlayerForm/PlayerForm'
import { selectGameData, selectPlayerProfile } from '../../store/gameSlice'
import styles from './HomePage.module.css'

function HomePage() {
  const gameData = useSelector(selectGameData)
  const playerProfile = useSelector(selectPlayerProfile)

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>{gameData.title}</h1>

          <p className={styles.description}>
            Версія гри з формою налаштування гравця. Дані вводяться через React
            Hook Form та зберігаються у Redux store.
          </p>

          <div className={styles.details}>
            <span>Гравець: {playerProfile.playerName}</span>
            <span>Складність: {playerProfile.difficulty}</span>
          </div>

          <PlayerForm />
        </div>

        <GamePreview />
      </section>
    </div>
  )
}

export default HomePage