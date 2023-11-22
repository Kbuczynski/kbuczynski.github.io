import React from "react"

import Heading from "../../components/Heading"
import Link from "../../components/Link"
import Section from "../../components/Section"
import { StyledContainer, StyledTable, StyledText } from "./style"
import CV from "../../downloads/Kamil_Buczyński_CV.pdf"
import { Fragment } from "react"

const links = [
  {
    address: "https://github.com/Kbuczynski",
    title: "Github",
  },
  {
    address: "https://www.linkedin.com/in/kbuczynski/",
    title: "LinkedIn",
  },
  {
    address: CV,
    title: "Download as PDF",
  },
  {
    address: "mailto:kamil.buczynski00@interia.pl",
    title: "kamil.buczynski00\n@interia.pl",
  },
]

const Contact = () => {
  return (
    <Section>
      <div id={"contact"} />
      <Heading title="003/ contact" />
      <StyledContainer>
        <StyledTable>
          <StyledText row={1} col={1} data-aos="fade-up">
            Social
          </StyledText>
          {links.length > 0 &&
            links.map(({ address, title }, index) => {
              return (
                <Fragment key={title}>
                  <Link
                    address={address}
                    title={title}
                    row={index + 1}
                    col={2}
                  />
                  {index === 1 && (
                    <StyledText row={3} col={1} data-aos="fade-up">
                      CV
                    </StyledText>
                  )}
                  {index === 2 && (
                    <StyledText row={4} col={1} data-aos="fade-up">
                      E-mail
                    </StyledText>
                  )}
                </Fragment>
              )
            })}
        </StyledTable>
      </StyledContainer>
    </Section>
  )
}

export default Contact
