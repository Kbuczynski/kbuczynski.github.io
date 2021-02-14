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

export const StyledLinksBox = styled.div`
  display: flex;
  flex-direction: column;
`
