import { type ReactNode } from "react";
import { BTNAdicionar } from "./styles";

interface Props {
    children: ReactNode;
    to: string; 
}

const BotaoAdicionar = ({ children, to }: Props) => {
    return (
    <BTNAdicionar to={to}>
        {children}
    </BTNAdicionar>
    );
};

export default BotaoAdicionar;