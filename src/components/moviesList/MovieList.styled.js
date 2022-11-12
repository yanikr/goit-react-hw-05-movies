import styled from 'styled-components';
export const MoviesListGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  grid-gap: 20px 20px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const MovieTitle = styled.p`
  text-align: center;
  color: brown;
  text-decoration: none;
`;
