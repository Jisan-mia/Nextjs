import styles from '../../styles/Ninjas.module.css'
import Head from 'next/head'


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
                    <a className={styles.ninja} key={ninja.id}>
                        <h3>{ninja.name}</h3>
                    </a>
                )):
                    'Loading Ninja..'
                }
                
            </div>
        </>
    )
}

export default Ninja
