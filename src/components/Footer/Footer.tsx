import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.left}>
                <div className={styles.imagePlaceholder}></div>
            </div>

            <div className={styles.center}>
                <p className={styles.topText}>Our Passion for Sweetness</p>
                <div className={styles.loves}>
                    <div className={styles.loveItem}>
                        <span className={styles.love}>❤️</span>

                    </div>
                    <div className={styles.loveItem}>
                        <span className={styles.love}>❤️</span>

                    </div>
                    <div className={styles.loveItem}>
                        <span className={styles.love}>❤️</span>

                    </div>
                </div>
            </div>


            <div className={styles.right}>
                <p className={styles.follow}>Follow Us</p>
                <div className={styles.socials}>
                    <span className={styles.facebook}>f</span>
                    <span className={styles.linkedin}>in</span>
                    <span className={styles.pinterest}>p</span>
                </div>
                <p className={styles.bottomText}>© 2025 Nthabi's Pastry Shop</p>
            </div>
        </footer >
    );
}
