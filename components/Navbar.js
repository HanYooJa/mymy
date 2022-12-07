import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">홈</Link>
        <Link href="/about">나에 대해</Link>
        <Link href="/profile">자기소개</Link>
        <Link href="/team">팀프로젝트</Link>
      </div>
    </div>
  )
}
