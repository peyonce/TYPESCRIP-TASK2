import styles from './hero.module.css'
import React from 'react'
export function Hero(){
return(
     <div className={styles.hero}>
     <div className={styles.heroContent}>
     <h1 className={styles.heroTitle}>Delight in</h1>
     <h2 className={styles.heroTitle}>Every Bite!!</h2>
     <p className={styles.heroDescription}>Sweet and Delicious</p>
     <button className={styles.heroButton}>ORDER NOW</button>
     </div>
     </div>      
  )
}

 
  
 