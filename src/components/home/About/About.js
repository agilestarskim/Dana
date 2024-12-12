import React from "react"
import * as styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2>About Us</h2>
      <div className={styles.aboutContent}>
        <p>
          In 1988, a visionary named John Smith embarked on a remarkable journey, laying the foundation for what would become a household name in the world of furniture - Zaniture.
        </p>
        <p>
          From its humble beginnings in a small workshop, Zaniture quickly gained recognition for its innovative and stylish furniture collections.
        </p>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <h3>42+</h3>
          <p>Design Collections</p>
        </div>
        <div className={styles.statItem}>
          <h3>11k+</h3>
          <p>Happy Customers</p>
        </div>
        <div className={styles.statItem}>
          <h3>93%</h3>
          <p>Satisfaction Rate</p>
        </div>
      </div>
    </section>
  )
}

export default About 