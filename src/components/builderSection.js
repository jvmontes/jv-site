import React from "react"
import * as styles from "./builderSection.module.css"
import { FaCode, FaPaintBrush, FaTools, FaExternalLinkAlt } from "react-icons/fa"
import { SiSquarespace, SiWordpress, SiShopify, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"

const BuilderSection = () => {
  return (
    <section className={styles.builderSection}>
      <div className={styles.builderContainer}>
        <h1 className={styles.builderTitle}>Builder</h1>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <FaCode className={styles.serviceIcon} />
            <h3>Website Development</h3>
          </div>

          <div className={styles.serviceItem}>
            <FaPaintBrush className={styles.serviceIcon} />
            <h3>Website Design</h3>
          </div>

          <div className={styles.serviceItem}>
            <FaTools className={styles.serviceIcon} />
            <h3>Technical Consulting</h3>
          </div>
        </div>

        <div className={styles.toolsSection}>
          <h2 className={styles.toolsTitle}>Tools</h2>
          <div className={styles.toolsGrid}>
            <div className={styles.toolItem}>
              <SiSquarespace className={styles.toolIcon} />
              <span>Squarespace</span>
            </div>

            <div className={styles.toolItem}>
              <SiWordpress className={styles.toolIcon} />
              <span>WordPress</span>
            </div>

            <div className={styles.toolItem}>
              <SiHtml5 className={styles.toolIcon} />
              <span>HTML</span>
            </div>

            <div className={styles.toolItem}>
              <SiCss3 className={styles.toolIcon} />
              <span>CSS</span>
            </div>

            <div className={styles.toolItem}>
              <SiJavascript className={styles.toolIcon} />
              <span>JavaScript</span>
            </div>

            <div className={styles.toolItem}>
              <SiShopify className={styles.toolIcon} />
              <span>Shopify</span>
            </div>
          </div>
        </div>

        <div className={styles.caseStudiesSection}>
          <a href="/case-studies" className={styles.caseStudiesLink}>
            View Case Studies
            <FaExternalLinkAlt className={styles.linkIcon} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default BuilderSection