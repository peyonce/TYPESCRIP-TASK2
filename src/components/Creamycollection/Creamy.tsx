import styles from './creamy.module.css'
 export function Creamy(){
  return(
    <div className={styles.creamy}>
      <h1 className={styles.creamyTittle}>Cupcake Collection</h1> 
      <div className={styles.creamyContainer}>
        <div className={styles.creamyCard1}>

          <h2>Holiday Special - 20% OFF</h2>
           <button>Order Today</button>
         </div>


         <div className={styles.creamyCard2}>
           <button>Oder Today</button>
         </div>

         <div className={styles.creamyCard3}>
          <h2>Holiday Collection</h2>
          <p>Comes with more flavours</p>
          <button>Order Now </button>

         </div>
         </div>
    </div>
  )
}
  
   
 