import React from "react"
import Logo from "../Logo"

import { StyledWrapper } from "./style"

const BackToHome = () => {
  const handleLink = () => {
    window.location.href = "/"
  }

  return (
    <StyledWrapper onClick={handleLink}>
      <Logo />
    </StyledWrapper>
  )
}

export default BackToHome
