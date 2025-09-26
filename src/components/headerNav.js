import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./headerNav.module.css"
import { IconContext } from "react-icons"
import { FiBook, FiUser, FiMail, FiMusic } from "react-icons/fi"
import { useLocation } from "@reach/router"

const HeaderNav = () => {
  const location = useLocation()
  const isHome = location.pathname === "/"
  const iconColor = isHome ? "#fff" : "#083f45"
  const navClass = isHome
    ? `${styles.headerNav} ${styles.navWhite}`
    : styles.headerNav
  const activeStyles = {
    textDecoration: `underline`,
    color: isHome ? "#fff" : "#083f45",
    textAlign: "center",
  }

  return (
    <div className={navClass}>
      <Link
        to="/blog"
        className={styles.linkContainer}
        activeStyle={activeStyles}
      >
        <IconContext.Provider value={{ color: iconColor, size: "1.5rem" }}>
          <span>
            <FiBook />
          </span>
        </IconContext.Provider>
        Blog
      </Link>

      <Link
        to="/music"
        className={styles.linkContainer}
        activeStyle={activeStyles}
      >
        <IconContext.Provider value={{ color: iconColor, size: "1.5rem" }}>
          <span>
            <FiMusic />
          </span>
        </IconContext.Provider>
        Music
      </Link>

      <Link
        to="/about"
        className={styles.linkContainer}
        activeStyle={activeStyles}
      >
        <IconContext.Provider value={{ color: iconColor, size: "1.5rem" }}>
          <span>
            <FiUser />
          </span>
        </IconContext.Provider>
        About
      </Link>

      <Link
        to="/contact-me"
        className={styles.linkContainer}
        activeStyle={activeStyles}
      >
        <IconContext.Provider value={{ color: iconColor, size: "1.5rem" }}>
          <span>
            <FiMail />
          </span>
        </IconContext.Provider>
        Contact
      </Link>
    </div>
  )
}

export default HeaderNav
