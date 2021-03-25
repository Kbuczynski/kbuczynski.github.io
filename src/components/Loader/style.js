import styled, { keyframes } from "styled-components"

const scaleAnimationLarge = keyframes`
    from {
        transform: scale(3.5);
    }
    to {
        transform: scale(3);
    }
`

const scaleAnimationSmall = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.5);
    }
`

export const StyledLoaderBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  left: 0;
  top: 0;
  ${({ theme }) => theme.mixins.center}
  flex-direction: column;
  z-index: 1;

  & > svg {
    animation: ${scaleAnimationLarge} 0.5s ease infinite alternate;

    ${({ theme }) => theme.media.small} {
      animation: ${scaleAnimationSmall} 0.5s ease infinite alternate;
    }
  }
`
