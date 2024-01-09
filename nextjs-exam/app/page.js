import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <h2>안녕 NEXT.js</h2>
        <div>🎯 화 이 팅 🎯</div>
    </main>
  )
}
