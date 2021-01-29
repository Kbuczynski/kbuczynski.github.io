import styled from "styled-components"

export const StyledMessage = styled.div`
  width: 100%;
  height: 100px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 2rem;
  ${({ theme }) => theme.mixins.center}
  box-shadow: 5px 5px ${({ theme }) => theme.colors.text};
  padding: 1rem;
  z-index: -1;
  filter: grayscale(1);
`
