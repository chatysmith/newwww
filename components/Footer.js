import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-onlyfans.svg" alt="Onlyfans Logo" className={styles.logo} />
      </footer>
    </>
  )
}
