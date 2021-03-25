import React, { useState } from "react"

import Heading from "../../components/Heading"
import ImageMe from "../../components/ImageMe"
import Section from "../../components/Section"
import { useDeviceDetec } from "../../hooks/useDeviceDetect"
import { StyledName, StyledPhoto, StyledText } from "./style"

const About = () => {
  const [showPhoto, setShowPhoto] = useState(false)
  const [photoX, setPhotoX] = useState(0)
  const [photoY, setPhotoY] = useState(0)
  const { isMobile } = useDeviceDetec()

  const handlePhoto = e => {
    if (isMobile) return

    const mouseX = e.nativeEvent.offsetX,
      mouseY = e.nativeEvent.offsetY

    setPhotoX(mouseX)
    setPhotoY(mouseY)
  }

  return (
    <Section>
      <Heading title="001/ About me" />
      <StyledPhoto
        show={showPhoto}
        photoX={photoX}
        photoY={photoY}
        data-aos={isMobile ? "fade-up" : ""}
      >
        <ImageMe src="me.jpg" />
      </StyledPhoto>
      <StyledText data-aos="fade-up">
        Hello, my name is{" "}
        <StyledName
          data-interactive={true}
          onMouseMove={handlePhoto}
          onMouseEnter={() => setShowPhoto(true)}
          onMouseLeave={() => setShowPhoto(false)}
        >
          Kamil&nbsp;Buczyński
        </StyledName>
        . I am a beginner front-end developer and UX/UI designer. I focus on
        creating beautiful, useful layouts and analyzing user behavior on the
        websites. These two things play a crucial role in the process of creating
        your brand.
      </StyledText>
    </Section>
  )
}

export default About
