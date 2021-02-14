import React, { useState } from "react"

import Heading from "../../components/Heading"
import Section from "../../components/Section"
import Link from "../../components/Link"
import Image from "../../components/Image"
import {
  StyledBox,
  StyledContainer,
  StyledImage,
  StyledImageWrapper,
  StyledNumber,
} from "./style"
import { useDeviceDetec } from "../../hooks/useDeviceDetect"
import { works } from "../../data/works"

const Works = () => {
  const [currentImg, setCurrentImg] = useState("")
  const [showImg, setShowImg] = useState(false)
  const { isMobile } = useDeviceDetec()

  const handleShowImg = e => {
    if (isMobile) return

    const target = e.target

    if (!target.getAttribute("data-image")) {
      if (currentImg !== target.parentNode.getAttribute("data-image")) {
        setCurrentImg(target.parentNode.getAttribute("data-image"))
        setShowImg(true)
      }
    }
  }

  const handleHideImg = () => {
    if (isMobile) return

    setCurrentImg("")
    setShowImg(false)
  }

  const handleOpenLink = path => {
    window.location.href = path
  }

  return (
    <Section>
      <Heading title="002/ Selected works" />
      <StyledContainer>
        {works.length > 0 &&
          works.map(({ path, title, src }, index) => (
            <div key={title} data-aos="fade-up">
              <StyledBox
                onMouseMove={handleShowImg}
                onMouseLeave={handleHideImg}
                data-image={src}
              >
                <Link address={path} title={title} isBlank={false} />
                <StyledNumber data-aos="fade-up" data-interactive={true}>
                  00{index + 1}
                </StyledNumber>
              </StyledBox>

              {isMobile && (
                <StyledImageWrapper
                  onClick={() => isMobile && handleOpenLink(path)}
                >
                  <Image src={src} />
                </StyledImageWrapper>
              )}
            </div>
          ))}
      </StyledContainer>

      {!isMobile && (
        <StyledImage show={showImg}>
          <Image src={currentImg} />
        </StyledImage>
      )}
    </Section>
  )
}

export default Works
