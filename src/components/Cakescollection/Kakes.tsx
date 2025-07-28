import styles from './cakes.module.css'
import React from 'react'
export function Kakes(){
return(

    <div className={styles.cakes}>
        <div className={styles.container}>
            <h1 className={styles.cakesTitle}>Our Delicious Cakes</h1>
            <div className={styles.cakesList}>
                <div className={styles.cakesCard}>
                    <img src="/images/macaron.jpeg" alt="macarons cakes"
                    className={styles.macaronimage}/>
                    <h2 className={styles.cakename}>macarons cakes</h2>
                    <p className={styles.Description}>crisp shell,chewy interior</p>
                    <button className={styles.cakeButton}>Order Macarons</button>


                </div>
                <div className={styles.cakesCard}>
                    <img src="/images/ Border Cake.jpeg" alt="border cake"
                    className={styles.Bordercakesimage}/>
                    <h2 className={styles.cakename}>Border cakes</h2>
                    <p className={styles.Description}>creamy buttercream frosting</p>
                    <button className={styles.cakeButton}>Order Border cake</button>

                     
                </div>
                 
                <div className={styles.cakesCard}>
                    <img src="/images/cupcake.jpeg" alt="cupcake"
                    className={styles.cupcakeimage}/>
                    <h2 className={styles.cakename}>Cupcakes</h2>
                    <p className={styles.Description}>soft,moist,buttery-light crumb</p>
                    <button className={styles.cakeButton}>Order cupcake</button>

                     
                </div>       

            </div>

        </div>

    </div>


)
}
