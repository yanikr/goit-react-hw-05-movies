import styled from 'styled-components';
const NotFoundDiv = styled.div`
  position: absolute;
  left: 40%;
  top: 40%;
  font-size: 60px;
`;
export const NotFound = () => {
  return <NotFoundDiv>Page not found</NotFoundDiv>;
};
