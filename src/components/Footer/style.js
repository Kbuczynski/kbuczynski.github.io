import styled from "styled-components"

export const StyledFooter = styled.footer`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  font-size: 2rem;

  ${({ theme }) => theme.media.small} {
    padding: 0 1rem;
    font-size: 1.5rem;

    & > a {
      margin-top: 0;
    }
  }
`
