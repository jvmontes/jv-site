import React from "react"

import * as styles from "./socialLinks.module.css"
import { IconContext } from "react-icons"

import { RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri"

const SocialLinks = () => {
  return (
    <div className={styles.socialsContainer}>
      <div className={styles.socials}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jorgealbertoviramontes/"
          className={styles.linkContainer}
        >
          <IconContext.Provider value={{ color: "#2867B2", size: "2rem" }}>
            <span style={{ paddingTop: `.5rem` }}>
              <RiLinkedinBoxLine></RiLinkedinBoxLine>
            </span>
          </IconContext.Provider>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jvmontes"
          className={styles.linkContainer}
        >
          <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
            <span style={{ paddingTop: `.5rem` }}>
              <RiGithubLine></RiGithubLine>
            </span>
          </IconContext.Provider>
        </a>
      </div>
    </div>
  )
}

export default SocialLinks
