import styled from "styled-components";

export const Button = styled.button`
    
 text-decoration: none;
  max-width: auto;
  background-color: rgb(98 84 243);
  color:  ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 1rem;
  margin-top: 2rem;

  &:hover,
  &:active {
    transform: scale(0.96);
  }
`