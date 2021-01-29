import { useState, useEffect } from "react"

const initialValues = {
  x: typeof window === "undefined" ? 0 : window.innerWidth / 2,
  y: typeof window === "undefined" ? 0 : window.innerHeight / 2,
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: initialValues.x,
    y: initialValues.y,
  })
  const [child, setChild] = useState(null)

  const updateMousePosition = e => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    setChild(e.target)
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)

    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return { mousePosition, child }
}

export default useMousePosition
