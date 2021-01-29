import React from "react"
import PropTypes from "prop-types"

import { StyledFooter } from "./style"

const Footer = ({ author }) => {
  return <StyledFooter>©2021 Develop by {author}</StyledFooter>
}

Footer.defaultProps = {
  author: `@kbuczynski`,
}

Footer.propTypes = {
  author: PropTypes.string,
}

export default Footer
