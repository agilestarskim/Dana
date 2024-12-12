import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Testimonials.module.css"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Savannah Nguyen",
      role: "Web Master",
      comment: "The Studio Sofa from Dana is my favorite piece of furniture ever. It's not just beautiful, it's incredibly cozy.",
    },
    {
      name: "Jacob Jones",
      role: "Developer",
      comment: "I've been a loyal customer for years, and their exceptional service never disappoints.",
    },
    {
      name: "Eleanor Pena",
      role: "Interior Designer",
      comment: "As an interior designer, I rely on Dana for nearly all my client's furniture needs.",
    }
  ]

  return (
    <section className={styles.testimonialSection}>
      <h2>What our customers are saying about us</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.avatarContainer}>
              {index === 0 && (
                <StaticImage 
                  src="../../../images/testimonials/testimonial.jpg"
                  alt={testimonial.name}
                  className={styles.avatar}
                  width={100}
                  height={100}
                />
              )}
              {index === 1 && (
                <StaticImage 
                  src="../../../images/testimonials/testimonial.jpg"
                  alt={testimonial.name}
                  className={styles.avatar}
                  width={100}
                  height={100}
                />
              )}
              {index === 2 && (
                <StaticImage 
                  src="../../../images/testimonials/testimonial.jpg"
                  alt={testimonial.name}
                  className={styles.avatar}
                  width={100}
                  height={100}
                />
              )}
            </div>
            <h3>{testimonial.name}</h3>
            <p className={styles.role}>{testimonial.role}</p>
            <p className={styles.comment}>{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials 