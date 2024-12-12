import * as React from "react"
import Layout from "../components/layout/Layout/Layout"
import Hero from "../components/home/Hero/Hero"
import About from "../components/home/About/About"
import Services from "../components/home/Services/Services"
import Testimonials from "../components/home/Testimonials/Testimonials"
import Seo from "../components/common/Seo"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title="Home"
    description="Discover exceptional furniture for every space in your dream home."
    image="/images/og/home-og-image.jpg"
  />
)

export default IndexPage
