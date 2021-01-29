import styled from "styled-components"

export const StyledText = styled.p`
  font-size: 4rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => theme.media.medium} {
    font-size: 3rem;
  }

  ${({ theme }) => theme.media.small} {
    font-size: 2rem;
  }
`

export const StyledPhoto = styled.div`
  filter: grayscale(1);

  ${({ theme }) => theme.media.onlyDesktop} {
    position: fixed;
    left: 10%;
    top: 10%;
    z-index: -1;
    transition: transform 0.1s ease;
    transform: scale(0);

    ${({ show, photoX, photoY }) =>
      show && `transform: translate(${photoX / 2}px, ${photoY / 2}px) scale(1)`}
  }
`

export const StyledName = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.background};
  text-shadow: -1px 0 ${({ theme }) => theme.colors.text},
    0 1px ${({ theme }) => theme.colors.text},
    1px 0 ${({ theme }) => theme.colors.text},
    0 -1px ${({ theme }) => theme.colors.text};
  transition: text-shadow, color 0.1s ease;

  ${({ theme }) => theme.media.onlyDesktop} {
    &:hover {
      text-shadow: none;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`
