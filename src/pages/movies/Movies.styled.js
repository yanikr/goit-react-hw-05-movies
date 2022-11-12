import styled from 'styled-components';
export const SearchMovieForm = styled.form`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  overflow: hidden;
`;
export const SearchMovieButton = styled.button`
  display: inline-block;
  /* width: 48px;
  height: 38px; */
  border-radius: 4px;
  border: 0;
  /* background-size: 40%; */
  color: #fff;
  padding: 16px 15px;
  font-weight: 500;
  background-color: orangered;
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  margin-right: 10px;
`;
export const SearchMovieInput = styled.input`
  display: inline-block;
  padding: 10px 15px;
  width: 100%;
  font: inherit;
  font-size: 20px;
  outline: none;
  border-radius: 4px;
  padding-left: 20px;
  padding-right: 4px;
`;
