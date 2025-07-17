import React from "react"
import * as styles from "./homeHeader.module.css"
import { StaticImage } from "gatsby-plugin-image"
import SocialLinks from "../components/socialLinks"
import CommonButton from "../components/common/commonButton"

const homeHeader = () => {
  return (
    <div className={styles.homeBanner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerDetails}>
          <div className={styles.title}>Jorge Viramontes</div>

          <h4 className={styles.tagline}>Engineer, Educator, and Speaker</h4>

          <div>
            <p>Helping people make sense of tech, business, and AI.</p>

            <p>
              Creative expression and storytelling through music and writing.
            </p>

            <CommonButton
              buttonTitle="Read More"
              slug="/about"
              isGatsbyLink={true}
            ></CommonButton>
          </div>

          <SocialLinks></SocialLinks>
        </div>
      </div>
      {/* Removed the bannerImage div and its contents. The background image will be set via CSS. */}
    </div>
  )
}

export default homeHeader
