import styled from "styled-components"

export const StyledSwitch = styled.label`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 50px;

  ${({ theme }) => theme.media.small} {
    width: 80px;
    height: 40px;
  }
`

export const StyledCheckbox = styled.input`
  display: none;
`

export const StyledSlider = styled.span`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 50px;
  position: absolute;
  left: 0.6rem;
  top: 50%;
  transition: transform 0.1s ease;
  transform: translateY(-50%)
    ${({ isChecked }) => (isChecked ? "translateX(140%)" : "translateX(0)")};

  ${({ theme }) => theme.media.small} {
    width: 30px;
    height: 30px;
    left: 0.5rem;
    transform: translateY(-50%)
      ${({ isChecked }) => (isChecked ? "translateX(125%)" : "translateX(0)")};
  }
`

export const StyledBall = styled.span`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 50px;
  position: absolute;
  left: -1rem;
  top: 50%;
  transform: translateY(-50%);
  filter: ${({ isChecked }) => (isChecked ? "opacity(1)" : "opacity(0)")};
  transition: filter 0.1s ease-in-out;

  ${({ theme }) => theme.media.small} {
    width: 30px;
    height: 30px;
  }
`
