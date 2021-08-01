import styles from '../../styles/Ninjas.module.css'
import Head from 'next/head'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: {ninjas: data}
    }
  }

  
function Ninja({ninjas}) {
    
    return (
        <>
            <Head> 
                <title>Ninja Lists | Ninjas</title>
                <meta name="keywords" content="Ninjas Lists" />
            </Head> 
            <h1>All The Ninjas</h1>
            <div className={styles.allNinjas}>
                {ninjas.length ? ninjas.map(ninja => (
                    <Link href={`/ninjas/${ninja.id}`} key={ninja.id} > 
                        <a className={styles.ninja} >
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                )):
                    'Loading Ninja..'
                }
                
            </div>
        </>
    )
}

export default Ninja
