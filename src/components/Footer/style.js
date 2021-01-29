import styled from "styled-components"

export const StyledFooter = styled.footer`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.mixins.center};
`
