import React from "react"

import Heading from "../components/Heading"
import Layout from "../components/Layout"
import Message from "../components/Message"
import Section from "../components/Section"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Section>
      <Heading title={"404: Not Found"} />
      <Message
        text={"You just hit a route that doesn't exist... the sadness. 😕"}
      />
    </Section>
  </Layout>
)

export default NotFoundPage
