import React, { useEffect, useState } from "react"
import { useDeviceDetec } from "../../hooks/useDeviceDetect"

import useMousePosition from "../../hooks/useMousePosition"
import { StyledCircle, StyledPointer } from "./style"

const Cursor = () => {
  const {
    mousePosition: { x, y },
    child,
  } = useMousePosition()
  const { isMobile } = useDeviceDetec()
  const [cursorX, setCursorX] = useState(x)
  const [cursorY, setCursorY] = useState(y)
  const [isInteractive, setIsInteractive] = useState(false)

  useEffect(() => {
    setCursorX(x)
    setCursorY(y)

    if (child === null) return

    child.getAttribute("data-interactive")
      ? setIsInteractive(true)
      : setIsInteractive(false)
  }, [x, y, child])

  if (isMobile) return null

  return (
    <>
      <StyledCircle
        cursorX={cursorX}
        cursorY={cursorY}
        isInteractive={isInteractive}
      />
      <StyledPointer
        cursorX={cursorX}
        cursorY={cursorY}
        isInteractive={isInteractive}
      />
    </>
  )
}

export default Cursor
