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

const works = [
  {
    address: "https://kuchnianaobcasach.com.pl/",
    title: "Kuchnia na obcasach",
    src: "kuchnianaobcasach.jpg",
  },
  {
    address: "https://www.dziwnow.pl/4fun/",
    title: "Dziwnów4Fun",
    src: "dziwnow4fun.jpg",
  },
  {
    address: "https://www.apartamentszczecin.eu/",
    title: "Apartament Szczecin",
    src: "apartamentszczecin.jpg",
  },
  {
    address: "http://dev.lokando.pl/",
    title: "Lokando",
    src: "lokando.jpg",
  },
  {
    address: "https://kbuczynski.github.io/photo-search-app/",
    title: "Photo search engine",
    src: "photosearchengine.png",
  },
  {
    address: "https://kbuczynski.github.io/grinchs-code/",
    title: "Grinch's Code",
    src: "grinchscode.jpg",
  },
  {
    address: "https://kbuczynski.github.io/lc-pokoje-i-apartamenty/dist/",
    title: "LC | pokoje & apartamenty",
    src: "lcpokojeapartamenty.jpg",
  },
  {
    address: "https://www.youtube.com/watch?v=IpjO-MXOHNI",
    title: "Uwaga Dzik",
    src: "uwagadzik.png",
  },
]

const Works = () => {
  const [currentImg, setCurrentImg] = useState("")
  const [showImg, setShowImg] = useState(false)
  const { isMobile } = useDeviceDetec()

  const handleShowImg = e => {
    if (isMobile) return

    const target = e.target

    if (target.getAttribute("data-image"))
      setCurrentImg(target.getAttribute("data-image"))
    else setCurrentImg(target.parentNode.getAttribute("data-image"))

    setShowImg(true)
  }

  const handleHideImg = () => {
    if (isMobile) return

    setCurrentImg("")
    setShowImg(false)
  }

  const handleOpenLink = address => {
    const newWindow = window.open(address, "_blank")
    newWindow.focus()
  }

  return (
    <Section>
      <Heading title="002/ Selected works" />
      <StyledContainer>
        {works.length > 0 &&
          works.map(({ address, title, src }, index) => (
            <StyledBox
              key={title}
              data-aos="fade-up"
              onMouseEnter={handleShowImg}
              onMouseLeave={handleHideImg}
              data-image={src}
              data-interactive={true}
              onClick={() => handleOpenLink(address)}
            >
              <Link address={address} title={title} />
              <StyledNumber data-aos="fade-up" data-interactive={true}>
                00{index + 1}
              </StyledNumber>
              {isMobile && (
                <StyledImageWrapper>
                  <Image src={src} />
                </StyledImageWrapper>
              )}
            </StyledBox>
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
