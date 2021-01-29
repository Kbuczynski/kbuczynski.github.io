import React from "react"

import Heading from "../components/Heading"
import Layout from "../components/Layout"
import Message from "../components/Message"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading title={"404: Not Found"} />
    <Message
      text={"You just hit a route that doesn't exist... the sadness. 😕"}
    />
  </Layout>
)

export default NotFoundPage
