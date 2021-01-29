import React from "react"
import PropTypes from "prop-types"

import { StyledLink } from "./style"

const Link = ({ address, title, row, col }) => {
  return (
    <StyledLink
      rel="noopener"
      href={address}
      title={title}
      target="_blank"
      data-aos="fade-up"
      row={row}
      col={col}
      data-interactive={true}
    >
      {title}
    </StyledLink>
  )
}

Link.propTypes = {
  address: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  row: PropTypes.number,
  col: PropTypes.number,
  img: PropTypes.string,
}

Link.defaultProps = {
  row: 0,
  col: 0,
}

export default Link
