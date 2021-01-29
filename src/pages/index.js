import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import About from "../sections/About"
import Works from "../sections/Works"
import Contact from "../sections/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Works />
    <Contact />
  </Layout>
)

export default IndexPage
