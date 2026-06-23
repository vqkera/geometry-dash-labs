import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  gameData: {
    title: 'Geometry Dash Mini',
    theme: 'проста аркадна веб-гра у стилі Geometry Dash',
    levelName: 'Неоновий старт',
    playerName: 'Кубик',
    controls: ['Space', 'ArrowUp', 'кнопка Стрибок'],
    technologies: [
      'React',
      'Vite',
      'React Router',
      'Redux',
      'Redux Toolkit',
      'React Hook Form',
      'CSS Modules',
    ],
  },
  playerProfile: {
    playerName: 'Гравець',
    cubeColor: '#ffcc29',
    difficulty: 'Легкий',
  },
  bestScore: 0,
  lastScore: 0,
  gamesPlayed: 0,
  totalScore: 0,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updatePlayerProfile: (state, action) => {
      state.playerProfile = {
        ...state.playerProfile,
        ...action.payload,
      }
    },

    saveGameResult: (state, action) => {
      const score = action.payload

      state.lastScore = score
      state.gamesPlayed += 1
      state.totalScore += score

      if (score > state.bestScore) {
        state.bestScore = score
      }
    },

    resetStats: (state) => {
      state.bestScore = 0
      state.lastScore = 0
      state.gamesPlayed = 0
      state.totalScore = 0
    },
  },
})

export const { updatePlayerProfile, saveGameResult, resetStats } =
  gameSlice.actions

export const selectGameData = (state) => state.game.gameData
export const selectPlayerProfile = (state) => state.game.playerProfile
export const selectBestScore = (state) => state.game.bestScore
export const selectLastScore = (state) => state.game.lastScore
export const selectGamesPlayed = (state) => state.game.gamesPlayed

export const selectAverageScore = (state) => {
  if (state.game.gamesPlayed === 0) {
    return 0
  }

  return Math.round(state.game.totalScore / state.game.gamesPlayed)
}

export default gameSlice.reducer