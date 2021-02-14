import styled from "styled-components"

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0.6rem;
  left: 0;

  ${({ theme }) => theme.media.small} {
    top: 0;
  }
`
