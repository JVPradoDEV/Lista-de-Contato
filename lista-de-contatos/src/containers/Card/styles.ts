import styled from "styled-components";
import colors from "../../styles/colors";

export const PFP = styled.img`
    max-width: 120px;
    max-height: 120px;
    border-radius: 4px;
    padding-bottom: 4px;
`

export const BTNConfirmar = styled.button`
    width: 100px;
    height: 20px;
    background-color: ${colors.verde};
    border: none;
    border-radius: 4px;
    color: ${colors.branco};
    cursor: pointer;
    font-weight: bold;
`

export const CardBody = styled.li`
    display: grid;
    background-color: ${colors.cinza};
    padding: 10px;
    place-items: center;
    border-radius: 14px;

    textarea{
        resize: none;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        field-sizing: content;
        padding-left: 4px;
        font-size: inherit;
        font-weight: bold;
    }

    button{
        margin-top: 4px;
        margin-right: 4px;
    }
`

export const DivCard = styled.div`
    display: flex;
`

export const ContainerCard = styled.div`
    background-color: ${colors.cinzaEscuro};
    padding: 6px;
    border-radius: 8px;
`

export const BTNRemover = styled.button`
    width: 100px;
    height: 20px;
    background-color: ${colors.vermelho};
    border: none;
    border-radius: 4px;
    color: ${colors.branco};
    cursor: pointer;
    font-weight: bold;
`