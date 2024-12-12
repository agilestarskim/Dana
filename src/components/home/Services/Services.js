import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Services.module.css"

const Services = () => {
  const services = [
    {
      title: "Luxury Item Design",
      description: "Exclusive furniture pieces crafted with premium materials and attention to detail.",
    },
    {
      title: "Fixed Joullery Design",
      description: "Custom-built fixtures and joinery solutions for your unique space.",
    },
    {
      title: "Product Customization",
      description: "Personalized furniture solutions tailored to your specific needs and preferences.",
    }
  ]

  return (
    <section className={styles.servicesSection}>
      <h2>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceImage}>
              <StaticImage
                src="../../../images/services/services.png"
                alt={service.title}
                placeholder="blurred"
                width={400}
                height={300}
                className={styles.image}
                objectFit="cover"
                formats={["auto", "webp", "avif"]}
                quality={95}
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className={styles.seeDetail}>See detail</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services 