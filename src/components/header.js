import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"
import { StaticImage } from "gatsby-plugin-image"
import HeaderNav from "./headerNav"
import { useLocation } from "@reach/router"

const Header = ({ siteTitle }) => {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <header
      className={
        isHome
          ? `${headerStyles.header} ${headerStyles.headerTransparent}`
          : headerStyles.header
      }
    >
      <div className={headerStyles.headerContent}>
        <Link to="/">
          <StaticImage
            src="../images/jv.png"
            width={80}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="JV Logo"
          />
        </Link>
        <HeaderNav></HeaderNav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
