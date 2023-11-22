import React from "react"
import PropTypes from "prop-types"

import { StyledSection } from "./style"

const Section = ({ children, id }) => {
  return <StyledSection id={id}>{children}</StyledSection>
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  id: "",
}

export default Section
