import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  saveGameResult,
  selectBestScore,
} from '../../store/gameSlice'
import styles from './GamePreview.module.css'

const PLAYER_LEFT = 90
const PLAYER_SIZE = 54
const OBSTACLE_WIDTH = 34
const START_OBSTACLE_X = 620
const JUMP_POWER = 18
const GRAVITY = 0.95
const GAME_SPEED = 7
const FRAME_TIME = 24
const SAFE_JUMP_HEIGHT = 48

function GamePreview() {
  const dispatch = useDispatch()
  const bestScore = useSelector(selectBestScore)

  const [isRunning, setIsRunning] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [player, setPlayer] = useState({
    y: 0,
    velocity: 0,
  })
  const [obstacleX, setObstacleX] = useState(START_OBSTACLE_X)
  const [score, setScore] = useState(0)

  const startGame = useCallback(() => {
    setIsRunning(true)
    setIsGameOver(false)
    setPlayer({
      y: 0,
      velocity: 0,
    })
    setObstacleX(START_OBSTACLE_X)
    setScore(0)
  }, [])

  const jump = useCallback(() => {
    if (!isRunning || isGameOver) {
      startGame()
      return
    }

    if (player.y === 0) {
      setPlayer((currentPlayer) => ({
        ...currentPlayer,
        velocity: JUMP_POWER,
      }))
    }
  }, [isRunning, isGameOver, player.y, startGame])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space' || event.code === 'ArrowUp') {
        event.preventDefault()
        jump()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [jump])

  useEffect(() => {
    if (!isRunning || isGameOver) {
      return
    }

    const gameTimer = setInterval(() => {
      setPlayer((currentPlayer) => {
        const nextVelocity = currentPlayer.velocity - GRAVITY
        const nextY = Math.max(0, currentPlayer.y + nextVelocity)

        return {
          y: nextY,
          velocity: nextY === 0 ? 0 : nextVelocity,
        }
      })

      setObstacleX((currentX) => {
        const nextX = currentX - GAME_SPEED

        if (nextX < -OBSTACLE_WIDTH) {
          setScore((currentScore) => currentScore + 1)
          return START_OBSTACLE_X
        }

        return nextX
      })
    }, FRAME_TIME)

    return () => {
      clearInterval(gameTimer)
    }
  }, [isRunning, isGameOver])

  useEffect(() => {
    if (!isRunning || isGameOver) {
      return
    }

    const playerRight = PLAYER_LEFT + PLAYER_SIZE
    const obstacleRight = obstacleX + OBSTACLE_WIDTH

    const hasHorizontalCollision =
      obstacleX < playerRight && obstacleRight > PLAYER_LEFT

    const hasVerticalCollision = player.y < SAFE_JUMP_HEIGHT

    if (hasHorizontalCollision && hasVerticalCollision) {
      setIsRunning(false)
      setIsGameOver(true)
      dispatch(saveGameResult(score))
    }
  }, [obstacleX, player.y, score, isRunning, isGameOver, dispatch])

  const statusText = isGameOver
    ? 'Гру завершено. Натисніть кнопку, щоб почати знову.'
    : isRunning
      ? 'Гра триває. Перестрибуйте перешкоди.'
      : 'Натисніть кнопку, Space або ArrowUp, щоб почати гру.'

  return (
    <section className={styles.preview}>
      <div className={styles.topBar}>
        <div>
          <p className={styles.caption}>Ігрове поле</p>
          <h2>Базова механіка</h2>
        </div>

        <div className={styles.scoreList}>
          <div className={styles.scoreItem}>
            <span>Рахунок</span>
            <strong>{score}</strong>
          </div>

          <div className={styles.scoreItem}>
            <span>Рекорд</span>
            <strong>{bestScore}</strong>
          </div>
        </div>
      </div>

      <div className={styles.gameField} onClick={jump}>
        <div className={styles.cloud}></div>
        <div className={styles.cloudSmall}></div>

        <div
          className={styles.player}
          style={{
            left: `${PLAYER_LEFT}px`,
            width: `${PLAYER_SIZE}px`,
            height: `${PLAYER_SIZE}px`,
            transform: `translateY(-${player.y}px) rotate(${player.y * 2}deg)`,
          }}
        >
          <span></span>
        </div>

        <div
          className={styles.obstacle}
          style={{
            left: `${obstacleX}px`,
            width: `${OBSTACLE_WIDTH}px`,
          }}
        ></div>

        <div className={styles.ground}></div>

        {!isRunning && (
          <div className={styles.overlay}>
            <p>{isGameOver ? 'Зіткнення з перешкодою' : 'Готові до старту'}</p>
          </div>
        )}
      </div>

      <div className={styles.controls}>
        <p>{statusText}</p>

        <button type="button" onClick={jump}>
          {isRunning && !isGameOver ? 'Стрибок' : 'Почати гру'}
        </button>
      </div>
    </section>
  )
}

export default GamePreview