import styled, { keyframes } from "styled-components"

const fontSize = `1rem`
const letterSpacing = `0.15em`

const typingVertical = textLength => keyframes`
  from { 
    height: 0 
  }
  to { 
    height: calc(${fontSize} * ${textLength} + ${letterSpacing} * ${textLength} + 3rem);
  }
`

const typingHorizontal = textLength => keyframes`
  from { 
    width: 0 
  }
  to { 
    width: calc(${fontSize} * ${textLength} - ${letterSpacing} * ${textLength} - 2rem);
  }
`

const blinkCaret = color => keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${color} }
`

export const StyledScrollInfo = styled.div`
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  text-orientation: upright;
  writing-mode: vertical-rl;
  overflow: hidden;
  border-bottom: 0.1em solid ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  letter-spacing: ${letterSpacing};
  font-size: ${fontSize};
  text-transform: uppercase;

  ${({ theme }) => theme.media.onlyDesktop} {
    animation: ${({ textLength }) => typingVertical(textLength)} 2s
        steps(${({ textLength }) => textLength}, end),
      ${({ theme }) => blinkCaret(theme.colors.text)} 0.5s step-end infinite;
  }

  ${({ theme }) => theme.media.medium} {
    text-orientation: initial;
    writing-mode: horizontal-tb;
    border-bottom: none;
    border-right: 0.1em solid ${({ theme }) => theme.colors.text};

    animation: ${({ textLength }) => typingHorizontal(textLength)} 2s
        steps(${({ textLength }) => textLength}, end),
      ${({ theme }) => blinkCaret(theme.colors.text)} 0.5s step-end infinite;
  }
`
