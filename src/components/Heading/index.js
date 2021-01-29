import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { StyledAnimSpan, StyledHeading1, StyledHeading2 } from "./style"

const MIN = 10,
  MAX = 30

const Heading = ({ title, isH1 }) => {
  const [transformValues, setTransformValues] = useState([])

  useEffect(() => {
    setTransformValues([
      randomValue(MIN, MAX),
      randomValue(MIN, MAX),
      randomValue(MIN, MAX),
    ])
  }, [])

  const handleTitle = title => {
    const titleWords = []

    title.split(" ").map(word => titleWords.push(word))

    return titleWords
  }

  const randomValue = (min, max) => {
    return Math.random() < 0.5
      ? Math.floor(Math.random() * max + min) * -1
      : Math.floor(Math.random() * max + min)
  }

  return isH1 ? (
    <StyledHeading1>
      {handleTitle(title).map((word, index) => (
        <StyledAnimSpan transformX={transformValues[index]} key={word}>
          {word}
        </StyledAnimSpan>
      ))}
    </StyledHeading1>
  ) : (
    <StyledHeading2>
      {handleTitle(title).map(word => (
        <span data-aos="fade-up" key={word}>
          {word}
        </span>
      ))}
    </StyledHeading2>
  )
}

Heading.defaultProps = {
  isH1: false,
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  isH1: PropTypes.bool,
}

export default Heading
