import React from "react"

import Icon from "../../images/logo.svg"
import { StyledLoaderBox } from "./style"

const Loader = ({ isLoading }) => {
  if (!isLoading) return null

  return (
    <StyledLoaderBox>
      <Icon />
    </StyledLoaderBox>
  )
}

export default Loader
