import { useSelector } from "react-redux";
import { Card } from "../../containers/Card";
import { ListaContainer } from "./styles";
import { type RootState } from "../../store";

function ListaCard() {
    const { itens } = useSelector((state: RootState) => state.contatos);


    return(
        <>
        <ListaContainer>
            {itens.map((c) => (
                <Card key={c.id} contato={c} />
            ))}
        </ListaContainer>
        </>
    )
}

export default ListaCard