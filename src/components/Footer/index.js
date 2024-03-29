import React, { useMemo } from "react"
import PropTypes from "prop-types"

import { StyledFooter } from "./style"
import Link from "../Link"

const Footer = ({ author }) => {
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <StyledFooter>
      <span>©{currentYear}</span> Developed by{" "}
      <Link
        title={author}
        address={"https://github.com/Kbuczynski"}
        isAos={false}
      />
    </StyledFooter>
  )
}

Footer.defaultProps = {
  author: `@kbuczynski`,
}

Footer.propTypes = {
  author: PropTypes.string,
}

export default Footer
