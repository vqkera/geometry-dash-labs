import styles from './InfoPanel.module.css'

function InfoPanel({ title, items }) {
  return (
    <section className={styles.panel}>
      <h2>{title}</h2>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default InfoPanel