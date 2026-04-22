import styled from "styled-components";
import colors from "../../styles/colors";

export const AddBody = styled.form`
    place-items: center;
    background-color: ${colors.cinza};
    display: grid;
    padding: 6px;
    border-radius: 8px;
    width: 620px;

    h1{
    margin-bottom: 40px;
    padding-top: 16px;
    font-size: 42px;
    }

    img{
        height: 300px;
        width: 280px;
        border-radius: 4px;
    }
`

export const AddContainer = styled.div`
        display: grid;
        background-color: ${colors.cinzaEscuro};
        padding: 10px;
        place-items: center;
        justify-items: center;
        border-radius: 14px;
        width: 600px;
        margin-top: 6px;
    
        input{
            resize: none;
            border: 4px solid ${colors.cinza};
            border-radius: 2px;
            background-color: rgba(0, 0, 0, 0);
            field-sizing: content;
            font-size: inherit;
            font-weight: bold;
            width: 120px;
            margin-left: 6px;
        }
`

export const AddDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
`

export const BTNVoltar = styled.button`
    width: 620px;
    height: 60px;
    background-color: ${colors.vermelho};
    border: none;
    border-radius: 4px;
    color: ${colors.branco};
    cursor: pointer;
    font-weight: bold;
    position: fixed;
    bottom: 40px;
    display: grid;
    align-items: center;
    font-size: 32px;

`

export const BTNConfirmar = styled.button`
    width: 320px;
    height: 42px;
    background-color: ${colors.verde};
    border: none;
    border-radius: 4px;
    color: ${colors.branco};
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
`

