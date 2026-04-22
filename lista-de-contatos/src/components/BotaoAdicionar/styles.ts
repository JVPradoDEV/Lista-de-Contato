import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../styles/colors"

export const BTNAdicionar = styled(Link)`
  background-color: ${colors.verde};
  border-radius: 64px;
  cursor: pointer;
  width: 64px;
  height: 64px;
  position: fixed;
  align-items: center;
  justify-content: center;
  display: flex;
  bottom: 40px;
  right: 40px;
  font-size: 40px;
  font-family: 'sans-serif';
  color: ${colors.branco};
  font-weight: bold;
  text-decoration: none;
`