import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head> 
      <title>Ninja Lists | Home</title>
      <meta name="keywords" content="Ninjas Lists" />
    </Head> 
      <div>
          <h1 className={styles.title}>Home page</h1>
          <p className={styles.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis optio commodi in. Deserunt inventore doloribus doloremque neque similique mollitia?</p>
          <p className={styles.text} >Corrupti aut fugit, voluptatum omnis, nulla labore ducimus, maiores at accusamus accusantium recusandae magni temporibus doloribus? Accusamus optio quibusdam tempore!</p>

          <Link href="/ninjas">
            <a className={styles.button}>See Ninja Lists</a>
          </Link>
      </div>
    </>
  )
}
