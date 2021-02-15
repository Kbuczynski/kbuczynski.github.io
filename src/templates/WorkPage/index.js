import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import Section from "../../components/Section"
import SEO from "../../components/SEO"
import { StyledLinksBox, StyledText } from "./style"
import Image from "../../components/Image"
import Link from "../../components/Link"

const WorkPage = ({ pageContext }) => {
  const { work } = pageContext

  useEffect(() => {
    const handleScroll = () =>
      window.scroll({
        top: 0,
        left: 0,
      })

    handleScroll()
  }, [pageContext])

  return (
    <Layout>
      <SEO title={work.title} />

      <Section>
        <Heading title={work.title} />
      </Section>
      <Section>
        <StyledText data-aos="fade-up">{work.description}</StyledText>
      </Section>
      <Section>
        <Image src={work.src.full} />
      </Section>
      <Section>
        <StyledText data-aos="fade-up">{work.technologies}</StyledText>
      </Section>
      <Section>
        <StyledLinksBox>
          <Link address={work.address} title={"Live"} />

          {work.repository !== "" && (
            <Link address={work.repository} title={"Repository"} />
          )}
        </StyledLinksBox>
      </Section>
    </Layout>
  )
}

WorkPage.propTypes = {
  pageContext: PropTypes.shape({
    address: PropTypes.string,
    repository: PropTypes.string,
    description: PropTypes.string,
    path: PropTypes.string,
    slug: PropTypes.string,
    src: PropTypes.object,
    technologies: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default WorkPage
