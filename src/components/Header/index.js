import PropTypes from "prop-types"
import React from "react"

import Heading from "../Heading"
import Switch from "../Switch"
import TypingText from "../TypingText"
import { StyledHeader } from "./style"

const Header = ({ siteTitle }) => {
  const handleScrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <StyledHeader>
      <Switch />
      <Heading title={siteTitle} isH1 />
      <button aria-label="Scroll down" onClick={handleScrollDown}>
        <TypingText text={"Scroll to explore"} />
      </button>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Kamil Buczyński portfolio`,
}

export default Header
