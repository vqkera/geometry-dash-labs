import styles from './GamePreview.module.css'

function GamePreview() {
  return (
    <section className={styles.preview}>
      <div className={styles.sky}>
        <div className={styles.cube}></div>
        <div className={styles.spike}></div>
        <div className={styles.spikeSmall}></div>
        <div className={styles.platform}></div>
      </div>
    </section>
  )
}

export default GamePreview