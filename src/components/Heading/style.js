import styled, { css, keyframes } from "styled-components"

export const StyledHeading = css`
  font-size: 10rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.3rem;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-family: "Bodoni Moda", serif;

  ${({ theme }) => theme.media.large} {
    font-size: 7rem;
  }

  ${({ theme }) => theme.media.medium} {
    font-size: 5rem;
  }

  ${({ theme }) => theme.media.small} {
    font-size: 2.8rem;
  }
`

const resetTransform = transformValue => keyframes`
  from {
    transform: translateX(${transformValue}%)
  }
  to {
    transform: translateX(0)
  }
`

export const StyledHeading1 = styled.h1`
  ${StyledHeading}

  line-height: 120%;
`

export const StyledAnimSpan = styled.span`
  transform: translateX(${({ transformX }) => transformX}%);
  animation: ${({ transformX }) => resetTransform(transformX)} 1.5s 1.5s ease
    forwards;
`

export const StyledHeading2 = styled.h2`
  ${StyledHeading}
`
