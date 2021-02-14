import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Icon from "../../images/logo.svg"
import { StyledLogoWrapper } from "./style"
import { useDeviceDetec } from "../../hooks/useDeviceDetect"

const Logo = ({ isDarkMode }) => {
  const { isMobile } = useDeviceDetec()
  const wrapper = useRef(null)

  useEffect(() => {
    const handleStroke = (color = "#000") => {
      const [elements] = wrapper.current.children

      const face = elements.getElementById("contour")
      const hair = elements.getElementById("hair_contour")
      const mustache = elements.getElementById("mustache")

      gsap.set([face, hair, mustache], { autoAlpha: 1 })

      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })

      tl.to(face, { stroke: color })
        .to(hair, { stroke: color })
        .to(mustache, { stroke: color })
    }

    const white = "#fff",
      black = "#000"

    if (isDarkMode) {
      handleStroke(white)
    } else {
      handleStroke(black)
    }
  }, [isDarkMode])

  const handleHover = () => {
    const [elements] = wrapper.current.children

    const glasses = elements.getElementById("glasses")

    gsap.set([glasses], { autoAlpha: 1 })

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })

    tl.fromTo(glasses, { y: "-=25" }, { y: "+=25" })
  }

  return (
    <StyledLogoWrapper
      ref={wrapper}
      onMouseEnter={handleHover}
      data-interactive={true}
    >
      <Icon data-interactive={true} style={{ width: `${isMobile && "80%"}` }} />
    </StyledLogoWrapper>
  )
}

Logo.defaultProps = {
  isDarkMode: false,
}

Logo.propTypes = {
  isDarkMode: PropTypes.bool,
}

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(Logo)
