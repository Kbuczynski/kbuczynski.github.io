import styled from "styled-components"

export const StyledCircle = styled.div.attrs(
  ({ cursorX, cursorY, isInteractive }) => ({
    style: {
      transform: `translate(${cursorX - 25}px, ${cursorY - 25}px) scale(${
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
    transform: `translate(${cursorX + 5}px, ${cursorY + 5}px)`,
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
