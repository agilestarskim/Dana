import React from "react"
import { Link } from "gatsby"
import * as styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Zaniture</h4>
          <p>Shape The Way People Live By Providing Timeless, Innovative, And Sustainable Solutions.</p>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/browse">Browse</Link></li>
            <li><Link to="/collection">Collection</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/luxury-design">Luxury Furniture Design</Link></li>
            <li><Link to="/services/customization">Product Customization</Link></li>
            <li><Link to="/services/consultation">Design Consultation</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <ul>
            <li>Email: contact@zaniture.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Design Street, NY</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Zaniture. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 