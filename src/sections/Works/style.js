import styled from "styled-components"

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    margin: 3rem 0;

    ${({ theme }) => theme.media.small} {
      margin: 1.5rem 0;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const StyledNumber = styled.span`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 0.5rem;
  transition: text-shadow, color 0.1s ease;
`

export const StyledImageWrapper = styled.div`
  margin-top: 1rem;
`

export const StyledBox = styled.div`
  ${({ theme }) => theme.media.onlyDesktop} {
    &:hover > span {
      color: ${({ theme }) => theme.colors.background};
      text-shadow: -1px 0 ${({ theme }) => theme.colors.text},
        0 1px ${({ theme }) => theme.colors.text},
        1px 0 ${({ theme }) => theme.colors.text},
        0 -1px ${({ theme }) => theme.colors.text};
    }
  }
`

export const StyledImage = styled.div`
  width: 60%;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: -1;
  transition: transform 1s ease, filter 0.1s ease;
  transform: translate(-60%, -50%);
  filter: opacity(0);

  ${({ show }) =>
    show && `transform: translate(-50%, -50%); filter: opacity(1)`}
`
