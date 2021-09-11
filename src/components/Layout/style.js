import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.text};
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    transition: background-color 0.5s ease-in-out;

    &::-webkit-scrollbar {
      width: .7rem;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.text};
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
    cursor: none;
  }

  img {
    filter: grayscale(1);
  }

  button {
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }
`

export const StyledMain = styled.main`
  padding: 0 10vw 0 10vw;

  ${({ theme }) => theme.media.medium} {
    padding: 0 1vw;
  }
`
