import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PageNavigation = ({ name }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/{name}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 1rem;
  margin: 2rem;
  width: fit-content;
  font-size: 3rem;
  height: fit-content;
  /* background-color: ${({ theme }) => theme.colors.bg}; */
  display: flex;
  border-radius: 2rem;
  text-transform: capitalize;
  border: 0.4rem solid ${({ theme }) => theme.colors.bg};
`;

export default PageNavigation;
