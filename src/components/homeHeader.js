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

          <h4 className={styles.tagline}>Entrepreneur, Engineer, and Empath</h4>

          <div>
            <p>
              Jorge brings over seven years of Fortune 500 consulting experience
              to the digital entrepreneurship realm from Chicago, IL.
            </p>

            <p>
              He's the owner of Alacrán Studio, a company focused on growing
              small businesses by building simple, powerful websites.
            </p>

            <p>
              When he's not coding or building his business, he loves traveling,
              meeting new people, and listening to all kinds of music.
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
