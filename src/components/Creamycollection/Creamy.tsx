import styles from './creamy.module.css';

export function Creamy() {
  return (
    <div className={styles.creamy}>
      <h1 className={styles.creamyTitle}>
        <span className={styles.decor}>★</span>
        Cupcake Collection
        <span className={styles.decor}>★</span>
      </h1>

      <div className={styles.creamyContainer}>

        <div className={styles.creamyCard1}>
          <h1 className={styles.holidayTitle}>Holiday</h1>
          <h1 className={styles.offText}>-20% OFF</h1>
          <button className={styles.orderButton}>Order Today</button>
        </div>


        <div className={styles.creamyCard2}>
          <div className={styles.bgImage}></div>
          <button className={styles.orderButtonBottom}>Order Today</button>
        </div>


        <div className={styles.creamyCard3}>
          <img src="/images/cake.jpeg" alt="Holiday Collection" className={styles.cupcakeImage} />
          <div className={styles.cardInfo}>
            <h1 className={styles.holidayTitle}>Holiday Collection</h1>
            <p>Comes with more flavors and festive decorations</p>
            <h2 className={styles.offText}>-10% OFF</h2>
            <button className={styles.orderButton}>Order Now</button>
          </div>
        </div>

      </div>
    </div>
  );
}
