import styled from "styled-components"

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.background};
  font-size: 4rem;
  text-decoration: none;
  transition: text-shadow, color 0.1s ease;
  text-shadow: -1px 0 ${({ theme }) => theme.colors.text},
    0 1px ${({ theme }) => theme.colors.text},
    1px 0 ${({ theme }) => theme.colors.text},
    0 -1px ${({ theme }) => theme.colors.text};
  position: relative;

  grid-column: ${({ col }) => col};
  grid-row: ${({ row }) => row};

  ${({ theme }) => theme.media.medium} {
    font-size: 3rem;
  }

  ${({ theme }) => theme.media.small} {
    font-size: 2rem;
    margin: 1rem 0;
  }

  ${({ theme }) => theme.media.onlyDesktop} {
    &:hover {
      text-shadow: none;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`
