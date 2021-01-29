import { useEffect, useState } from "react"

const BREAKPOINT = 840

export const useDeviceDetec = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const windowWIdth = window.innerWidth
    windowWIdth < BREAKPOINT ? setIsMobile(true) : setIsMobile(false)

    window.addEventListener("resize", () => {
      const windowWIdth = window.innerWidth
      windowWIdth < BREAKPOINT ? setIsMobile(true) : setIsMobile(false)
    })
  }, [])

  return { isMobile }
}
