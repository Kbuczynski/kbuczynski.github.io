import styled from "styled-components"

export const StyledContainer = styled.div`
  display: flex;
`

export const StyledTable = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);

  ${({ theme }) => theme.media.small} {
    display: flex;
    flex-direction: column;
  }
`

export const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 4rem;
  margin: 0;
  grid-column: ${({ col }) => col};
  grid-row: ${({ row }) => row};

  ${({ theme }) => theme.media.medium} {
    font-size: 3rem;
  }

  ${({ theme }) => theme.media.small} {
    font-size: 2rem;
    margin: 1rem 0;
  }
`
