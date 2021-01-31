import React from "react"
import PropTypes from "prop-types"

import { StyledLink } from "./style"

const Link = ({ address, title, row, col, isAos }) => {
  return (
    <StyledLink
      rel="noopener"
      href={address}
      title={title}
      target="_blank"
      data-aos={isAos && "fade-up"}
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
  isAos: PropTypes.bool,
}

Link.defaultProps = {
  row: 0,
  col: 0,
  isAos: true,
}

export default Link
