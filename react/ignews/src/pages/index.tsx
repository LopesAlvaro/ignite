import styles from '../styles/home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Início | ig.news</title>
    </Head>
   <div className={styles.title}>TESTE <span> NEXT </span></div>
   </>
  )
}
