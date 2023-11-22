import React, { useMemo, useState } from "react"

import Heading from "../../components/Heading"
import ImageMe from "../../components/ImageMe"
import Section from "../../components/Section"
import { useDeviceDetec } from "../../hooks/useDeviceDetect"
import { StyledName, StyledPhoto, StyledText } from "./style"
import Link from "../../components/Link"

const About = () => {
  const [showPhoto, setShowPhoto] = useState(false)
  const [photoX, setPhotoX] = useState(0)
  const [photoY, setPhotoY] = useState(0)
  const { isMobile } = useDeviceDetec()
  const yearsOfWork = useMemo(() => new Date().getFullYear() - 2021, [])

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
        . I’m a full-stack developer from Poland with over {yearsOfWork} years
        of commercial experience in creating websites, web, and mobile
        applications. Currently, I'm working as Software Engineer and studying
        Computer Science. Also, I was an organizer and mentor at Hackathons. If
        you're interested in my services, feel free to{" "}
        <Link
          address={"#contact"}
          title={"contact me"}
          isBlank={false}
          isAos={false}
        />
        .
      </StyledText>
    </Section>
  )
}

export default About
