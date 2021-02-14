import styled from "styled-components"

export const StyledCircle = styled.div.attrs(
  ({ cursorX, cursorY, isInteractive }) => ({
    style: {
      transform: `translate(${cursorX - 30}px, ${cursorY - 30}px) scale(${
        isInteractive ? "1.5" : "1"
      })`,
    },
  })
)`
  position: fixed;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  background-color: transparent;
  border: 0.15rem solid ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  transition: transform 0.1s ease;
`

export const StyledPointer = styled.div.attrs(({ cursorX, cursorY }) => ({
  style: {
    transform: `translate(${cursorX}px, ${cursorY}px)`,
  },
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
`
