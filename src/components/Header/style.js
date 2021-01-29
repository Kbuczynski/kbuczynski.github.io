import styled from "styled-components"

export const StyledHeader = styled.header`
  position: relative;
  ${({ theme }) => theme.mixins.center()}
  min-height: 100vh;
  overflow: hidden;

  ${({ theme }) => theme.media.small} {
    min-height: 90vh;
  }
`
