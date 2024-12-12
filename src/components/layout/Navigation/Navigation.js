import React from "react"
import { Link } from "gatsby"
import * as styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">Dana Kyoku</Link>
      </div>
      <div className={styles.menuItems}>
        <Link to="/browse">Browse</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/about-us">About Us</Link>
        <button className={styles.buyNow}>Buy Now</button>
      </div>
    </nav>
  )
}

export default Navigation 