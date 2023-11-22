import React from "react"
import PropTypes from "prop-types"

import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import Section from "../../components/Section"
import SEO from "../../components/SEO"
import { StyledLinksBox, StyledText } from "./style"
import Link from "../../components/Link"

const WorkPage = ({ pageContext }) => {
  const { work } = pageContext

  return (
    <Layout>
      <SEO title={work.title} />

      <Section id="info">
        <Heading title={work.title} />
      </Section>
      <Section>
        <StyledText data-aos="fade-up">{work.description}</StyledText>
      </Section>
      <Section>
        <StyledText data-aos="fade-up">{work.technologies}</StyledText>
      </Section>
      <Section>
        <StyledLinksBox>
          {work?.address && <Link address={work.address} title={"Live"} />}

          {work?.repository && (
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
