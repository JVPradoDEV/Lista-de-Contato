import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";

export const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', 'sans-serif'
  }
  
  body{
    background-color: ${colors.cinza};
  }
`;

export const Container = styled.div`
  place-items: center;
  margin: 0 auto;
  background-color: ${colors.branco};
  height: 100vh;
  width: 80%;

  h1{
    margin-bottom: 40px;
    padding-top: 16px;
    font-size: 42px;
    }
`;
