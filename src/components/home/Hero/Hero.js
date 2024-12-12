import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Hero.module.css"

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1>
          Designing your <span>dream home</span>
          <br />
          exceptional <span>furniture for</span>
          <br />
          every space
        </h1>
        <p>
          Shape the way people live by providing timeless, innovative, and sustainable furniture
          solutions. For over three decades, we have remained dedicated to enriching homes.
        </p>
      </div>
      <div className={styles.heroImage}>
        <StaticImage
          src="../../../images/hero/hero-main.jpg"
          alt="Modern luxury furniture"
          placeholder="blurred"
          width={1000}
          formats={["auto", "webp", "avif"]}
          quality={95}
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Hero