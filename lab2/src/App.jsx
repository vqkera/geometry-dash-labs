import Header from './components/Header/Header'
import GamePreview from './components/GamePreview/GamePreview'
import InfoPanel from './components/InfoPanel/InfoPanel'
import styles from './App.module.css'

function App() {
  const functionalityInfo = [
    'гравець керує кубиком за допомогою клавіші Space, ArrowUp або кнопки на екрані',
    'перешкода рухається справа наліво по ігровому полю',
    'під час успішного проходження перешкоди збільшується рахунок',
    'при зіткненні кубика з перешкодою гра завершується',
    'для керування станом гри використано хуки useState та useEffect',
  ]

  const componentsInfo = [
    'Header відповідає за верхню частину інтерфейсу',
    'GamePreview містить основну логіку гри',
    'InfoPanel використовується для виведення опису функціоналу',
    'App об’єднує компоненти в єдиний інтерфейс додатку',
  ]

  return (
    <main className={styles.app}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.label}>Лабораторна робота №2</p>
          <h1>Geometry Dash Mini</h1>
          <p className={styles.description}>
            У цій лабораторній роботі реалізовано базовий функціонал гри:
            запуск, стрибок персонажа, рух перешкоди, підрахунок балів та
            перевірку зіткнення.
          </p>
        </div>

        <GamePreview />
      </section>

      <div className={styles.panels}>
        <InfoPanel title="Базовий функціонал гри" items={functionalityInfo} />
        <InfoPanel title="Функціональні компоненти" items={componentsInfo} />
      </div>
    </main>
  )
}

export default App