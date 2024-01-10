import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
        <h2>안녕 NEXT.js</h2>
        <p>
          <Link href="/about">About Us</Link>
        </p>
        <p>
          <Link href="/blog">Blog</Link>
        </p>
        <div>🎯 화 이 팅 🎯</div>
    </main>
  )
}
