import { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p>Nthabi's</p>
        <h2>Pastry Shop</h2>
      </div>

      <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><a href="#" className={styles.navLink}>Home</a></li>
        <li><a href="#" className={styles.navLink}>Menu</a></li>
        <li><a href="#" className={styles.navLink}>Cakes</a></li>
        <li><a href="#" className={styles.navLink}>Pastries</a></li>
        <li><a href="#" className={styles.navLink}>About</a></li>
        <li><a href="#" className={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
};
