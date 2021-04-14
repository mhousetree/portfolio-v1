import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import * as styles from "./index/index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className={styles.wrapper}>
      <h1 className={styles.eyecatch}>
        This is <span id="name">Mhousetree</span>'s<br />
        Portfolio site.
      </h1>
      {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      /> */}
    </section>
  </Layout>
)

export default IndexPage
