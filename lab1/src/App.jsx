import Header from './components/Header/Header'
import GamePreview from './components/GamePreview/GamePreview'
import InfoPanel from './components/InfoPanel/InfoPanel'
import styles from './App.module.css'

function App() {
  const projectInfo = [
    'тема проекту: проста веб-гра у стилі Geometry Dash',
    'технології: React, Vite, JavaScript',
    'структура: компоненти розміщені в окремих папках',
    'стилізація: CSS Modules та глобальні стилі',
  ]

  return (
    <main className={styles.app}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.label}>Лабораторна робота №1</p>
          <h1>Geometry Dash Mini</h1>
          <p className={styles.description}>
            Перший варіант React-додатку для майбутньої гри. На цьому етапі
            підготовлено архітектуру, компоненти та стилізацію інтерфейсу.
          </p>
        </div>

        <GamePreview />
      </section>

      <InfoPanel title="Опис проєкту" items={projectInfo} />
    </main>
  )
}

export default App