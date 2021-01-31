import React, { useEffect, useState } from "react"

import TypingText from "../TypingText"
import { StyledBox } from "./style"

const BackToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > window.innerHeight ? setShow(true) : setShow(false)
    })
  }, [])

  const handleScroll = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })

  return (
    show && (
      <StyledBox onClick={handleScroll} isInteractive={true}>
        <TypingText text={"back to top"} />
      </StyledBox>
    )
  )
}

export default BackToTop
