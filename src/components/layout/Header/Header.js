import * as React from "react"
import Navigation from "../Navigation/Navigation"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <Navigation />
  </header>
)

export default Header
