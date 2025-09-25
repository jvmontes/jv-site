import * as React from "react"

import "../styles/global.css"
import "../styles/index.css"

import IconCollection from "../components/iconCollection"
import HomeHeader from "../components/homeHeader"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FaCode, FaPaintBrush, FaTools, FaExternalLinkAlt } from "react-icons/fa"
import { SiSquarespace, SiWordpress, SiShopify, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"

import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

const soundCloudTextStyle = {
  fontSize: `14px`,
  lineBreak: `anywhere`,
  wordBreak: `normal`,
  overflow: "hidden",
  whiteSpace: `nowrap`,
  textOverflow: `ellipsis`,
  fontFamily: `Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif`,
  fontWeight: `100`,
  color: "#000",
  textDecoration: "none"
}

const soundCloudComponentStyle = {
  marginBottom: `2rem`
}

const IndexPage = () => {


  return (

    <Layout>
      <Seo title="Home" />

      <HomeHeader></HomeHeader>

      <section className="builderSection">
        <div className="builderContainer">
          <h1 className="builderTitle">Builder</h1>

          <div className="servicesGrid">
            <div className="serviceItem">
              <FaCode className="serviceIcon" />
              <h3>Website Development</h3>
            </div>

            <div className="serviceItem">
              <FaPaintBrush className="serviceIcon" />
              <h3>Website Design</h3>
            </div>

            <div className="serviceItem">
              <FaTools className="serviceIcon" />
              <h3>Technical Consulting</h3>
            </div>
          </div>

          <div className="toolsSection">
            <h2 className="toolsTitle">Tools</h2>
            <div className="toolsGrid">
              <div className="toolItem">
                <SiSquarespace className="toolIcon" />
                <span>Squarespace</span>
              </div>

              <div className="toolItem">
                <SiWordpress className="toolIcon" />
                <span>WordPress</span>
              </div>

              <div className="toolItem">
                <SiHtml5 className="toolIcon" />
                <span>HTML</span>
              </div>

              <div className="toolItem">
                <SiCss3 className="toolIcon" />
                <span>CSS</span>
              </div>

              <div className="toolItem">
                <SiJavascript className="toolIcon" />
                <span>JavaScript</span>
              </div>

              <div className="toolItem">
                <SiShopify className="toolIcon" />
                <span>Shopify</span>
              </div>
            </div>
          </div>

          <div className="caseStudiesSection">
            <a href="/case-studies" className="caseStudiesLink">
              View Case Studies
              <FaExternalLinkAlt className="linkIcon" />
            </a>
          </div>
        </div>
      </section>

      <div className="bioContainer">
        <div className="copyContent">

          <h1 style={{ textAlign: `center` }}>Music</h1>

          <p>I've been playing music since 2005, when I learned how to play the guitar at lessons offered through the church choir.
            After that, some friends and I formed a band by the name of Makeshift and played several shows at different venues throughout Chicago.
          </p>
          <p>After that, I played in the church choir for over ten years, and have recently been creating music under my own name and sound.
            This has been an incredibly introspective journey into the question of what's possible. When we have freedom to create, there's so much available.
            This is my exploration into what's possible in my own life. I hope you enjoy, feel free to listen to all my music here.
          </p>

          <div style={soundCloudComponentStyle}>
            <iframe title="when-i-try-to-speak" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/732231520&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <div style={soundCloudTextStyle}>
              <a href="https://soundcloud.com/jayalbertomusic" title="J. Alberto" target="_blank" rel="noreferrer" style={{ color: "#000", textDecoration: "none" }}>J. Alberto</a> ·
              <a href="https://soundcloud.com/jayalbertomusic/when-i-try-to-speak-2019-mix" title="When I Try To Speak (2019 Mix)" target="_blank" rel="noreferrer" style={{ color: "#000", textDecoration: "none" }}>When I Try To Speak (2019 Mix)</a>
            </div>
          </div>

          <div style={soundCloudComponentStyle}>
            <iframe title="silver-lining" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367405325&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <div style={soundCloudTextStyle}>
              <a href="https://soundcloud.com/jayalbertomusic" title="J. Alberto" target="_blank" rel="noreferrer" style={{ color: "#000", textDecoration: "none" }}>J. Alberto</a> ·
              <a href="https://soundcloud.com/jayalbertomusic/silver-lining" title="Silver Lining [Demo]" target="_blank" rel="noreferrer" style={{ color: "#000", textDecoration: "none" }}>Silver Lining [Demo]</a>
            </div>
          </div>

          <div style={soundCloudComponentStyle}>
            <iframe title="ready-set" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308215759&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <div style={soundCloudTextStyle}>
              <a href="https://soundcloud.com/jayalbertomusic" title="J. Alberto" target="_blank" rel="noreferrer" style={{ color: "#000", textDecoration: "none" }}>J. Alberto</a> ·
              <a href="https://soundcloud.com/jayalbertomusic/ready-set" title="Ready, Set" target="_blank" rel="noreferrer" style={{ color: "#000", textDecoration: "none" }}>Ready, Set</a>
            </div>
          </div>

        </div>

      </div>

      <div className="bioContainer">
        <div className="copyContent">

          <h1 style={{ textAlign: `center` }}>I built this website from the ground up.</h1>

          <p>Here the different technologies I used to build this site:</p>
        </div>

        <IconCollection></IconCollection>

        <div className="copyContent">
          <p>Here are some of the benefits from building a website this way:</p>
          <ul>
            <li>Unlimited customization and freedom around design.</li>
            <li>Lightweight implementation using simple Javascript.</li>
            <li>Quickly deploy iterative updates.</li>
            <li>It's all open source, and you can check it out here on <a target="_blank" rel="noreferrer" href="https://github.com/jvmontes/basic-blog">Github</a>.</li>
          </ul>

        </div>
      </div>

      <div className="bioContainer">
        <div className="copyContent">

          <h1 style={{ textAlign: `center` }}>A Final Word</h1>

          <p>Hey, I just wanted to say, I really appreciate that you came and checked out my website. From one human to another, it means a lot.
            I believe that gratitude is what grounds us in our lives and if we're able to express and accept gratitude, it will immensly increase the quality of our lives.
          </p>

          <p>
            This project has taken me a long time to build, but I'm happy with where it stands. Utilizing the modern tools available to us, I was able to build a modern-looking website
            to authentically share my story, for a low cost and less effort than you'd think. I have the freedom to add whatever I see fit, and I'm able to really share myself authentically.
            I hope you enjoyed your stay, and I hope you find peace, love, and light for yourself in your life. And I really mean that.
          </p>

          <p>Peace ✌🏼</p>
        </div>

      </div>

    </Layout>
  )
}

export default IndexPage
