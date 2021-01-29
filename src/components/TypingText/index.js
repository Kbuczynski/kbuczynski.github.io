import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { StyledScrollInfo } from "./style"

const TypingText = ({ text, isInteractive }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    show && (
      <>
        <StyledScrollInfo
          textLength={text.length}
          data-interactive={isInteractive ? true : false}
        >
          {text}
        </StyledScrollInfo>
      </>
    )
  )
}

TypingText.propTypes = {
  text: PropTypes.string.isRequired,
  isInteractive: PropTypes.bool,
}

TypingText.defaultProps = {
  isInteractive: false,
}

export default TypingText
