import { createContext, useContext, useMemo, useState } from 'react'

const GameContext = createContext(null)

const gameData = {
  title: 'Geometry Dash Mini',
  theme: 'проста аркадна веб-гра у стилі Geometry Dash',
  levelName: 'Неоновий старт',
  difficulty: 'Легкий',
  playerName: 'Кубик',
  controls: ['Space', 'ArrowUp', 'кнопка Стрибок'],
  technologies: ['React', 'Vite', 'React Router', 'Context API', 'CSS Modules'],
}

export function GameProvider({ children }) {
  const [bestScore, setBestScore] = useState(0)
  const [lastScore, setLastScore] = useState(0)
  const [gamesPlayed, setGamesPlayed] = useState(0)
  const [totalScore, setTotalScore] = useState(0)

  const saveGameResult = (score) => {
    setLastScore(score)
    setBestScore((currentBestScore) => Math.max(currentBestScore, score))
    setGamesPlayed((currentGamesPlayed) => currentGamesPlayed + 1)
    setTotalScore((currentTotalScore) => currentTotalScore + score)
  }

  const resetStats = () => {
    setBestScore(0)
    setLastScore(0)
    setGamesPlayed(0)
    setTotalScore(0)
  }

  const averageScore =
    gamesPlayed === 0 ? 0 : Math.round(totalScore / gamesPlayed)

  const value = useMemo(
    () => ({
      gameData,
      bestScore,
      lastScore,
      gamesPlayed,
      averageScore,
      saveGameResult,
      resetStats,
    }),
    [bestScore, lastScore, gamesPlayed, averageScore],
  )

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export function useGame() {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error('useGame має використовуватися всередині GameProvider')
  }

  return context
}