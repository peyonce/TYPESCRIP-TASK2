import styles from '../Navbar/Navbar.module.css'
export function Navbar(){
  return(
    <nav className={styles.nav}>
     <a href='#' className={styles.nav_brand}><h2>Nthabi</h2>
     <p></p>
     </a>
     <ul className={styles.nav_menu}>
       <li className={styles.nav_item}>
        <a href='#' className={styles.nav_link}>
           Home
        </a>
       </li>
       <li className={styles.nav_item}>
          <a href='#' className={styles.nav_link}>
          Menu
          </a>
       </li>
       <li className={styles.nav_item}>
         <a href='#' className={styles.nav_link}>
            Cakes
            </a>
            </li>
            <li className={styles.nav_item}>
              <a href='#' className={styles.nav_link}>
                Pastries
              </a>
            </li>
              <li className={styles.nav_item}>
                <a href='#' className={styles.nav_link}>
                  About
                </a>
              </li>
              <li className={styles.nav_item}>
                <a href='#' className={styles.nav_link}>
                  Contact
                </a>

              </li>
     </ul>
    </nav>
  )
}

  

  
