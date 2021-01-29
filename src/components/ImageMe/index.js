import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Message from "../Message"
import { useDeviceDetec } from "../../hooks/useDeviceDetect"

const ImageMe = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { isMobile } = useDeviceDetec()

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <Message text={"Picture not found 🤔"} />
  }

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      objectFit="cover"
      style={{ width: isMobile ? 314 : 500 }}
      alt="This is a picture of my face."
    />
  )
}

export default ImageMe
