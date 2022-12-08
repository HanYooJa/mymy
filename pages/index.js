import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Home - Next Tutorial</title>
      </Head>

      <h1 className={styles.homeTitle}>유쟈의 홈페이지에 어서오세요 💖</h1>
      <Image
        objectFit="contain"
        objectPosition="top right"
        src="/images/bbo.jpg"
        width={300}
        height={300}
      ></Image>
    </div>
  )
}
