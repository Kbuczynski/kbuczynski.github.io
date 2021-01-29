import React from "react"
import PropTypes from "prop-types"

import { StyledMessage } from "./style"

const Message = ({ text }) => {
  return <StyledMessage>{text}</StyledMessage>
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Message
