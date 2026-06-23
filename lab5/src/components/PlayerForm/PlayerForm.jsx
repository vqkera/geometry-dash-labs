import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectPlayerProfile,
  updatePlayerProfile,
} from '../../store/gameSlice'
import styles from './PlayerForm.module.css'

const cubeColors = [
  {
    label: 'Жовтий',
    value: '#ffcc29',
  },
  {
    label: 'Блакитний',
    value: '#39f5ff',
  },
  {
    label: 'Рожевий',
    value: '#ff3b6b',
  },
  {
    label: 'Зелений',
    value: '#6dff7a',
  },
]

function PlayerForm() {
  const dispatch = useDispatch()
  const playerProfile = useSelector(selectPlayerProfile)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: playerProfile,
    mode: 'onSubmit',
  })

  const selectedColor = watch('cubeColor')

  const onSubmit = (data) => {
    dispatch(updatePlayerProfile(data))
    reset(data)
  }

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>Налаштування гравця</h2>
          <p>Перед початком гри можна змінити дані кубика.</p>
        </div>

        <div
          className={styles.colorPreview}
          style={{
            backgroundColor: selectedColor,
          }}
        ></div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.field}>
          <span>Ім’я гравця</span>

          <input
            type="text"
            placeholder="Наприклад: Venhryn"
            {...register('playerName', {
              required: 'Введіть ім’я гравця',
              minLength: {
                value: 2,
                message: 'Ім’я має містити мінімум 2 символи',
              },
              maxLength: {
                value: 16,
                message: 'Ім’я має містити максимум 16 символів',
              },
            })}
          />

          {errors.playerName && (
            <small className={styles.error}>{errors.playerName.message}</small>
          )}
        </label>

        <label className={styles.field}>
          <span>Колір кубика</span>

          <select {...register('cubeColor')}>
            {cubeColors.map((color) => (
              <option key={color.value} value={color.value}>
                {color.label}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span>Складність</span>

          <select {...register('difficulty')}>
            <option value="Легкий">Легкий</option>
            <option value="Середній">Середній</option>
            <option value="Складний">Складний</option>
          </select>
        </label>

        <button type="submit">Зберегти дані</button>

        {isSubmitSuccessful && (
          <p className={styles.success}>Дані гравця збережено.</p>
        )}
      </form>
    </section>
  )
}

export default PlayerForm