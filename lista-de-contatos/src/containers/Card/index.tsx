import { useState } from "react"
import { useDispatch } from "react-redux";
import { BTNConfirmar, BTNRemover, CardBody, ContainerCard, DivCard, PFP } from "./styles"
import { editarContato, removerContato } from "../../store/reducers/Contatos";

interface Contato {
  id: string;
  nome: string;
  tel: string;
  email: string;
}

interface ContatoCardProps {
  contato: Contato;
}

export const Card: React.FC<ContatoCardProps> = ({ contato }) => {

const dispatch = useDispatch();

const [estaEditando, setEstaEditando] = useState(false);

const [nomeEditado, setNomeEditado] = useState(contato.nome);
const [telEditado, setTelEditado] = useState(contato.tel);
const [emailEditado, setEmailEditado] = useState(contato.email);

const abrirEdicao = () => {
    setNomeEditado(contato.nome);
    setTelEditado(contato.tel);
    setEmailEditado(contato.email);
    setEstaEditando(true);
  };

const salvaEdicao = () => {
  dispatch(editarContato({
    id: contato.id,
    nome: nomeEditado,
    tel: telEditado,
    email: emailEditado
  }))

  setEstaEditando(false);
};

const cancelaEdicao = () => {
  setNomeEditado(contato.nome);
  setEmailEditado(contato.email);
  setTelEditado(contato.tel);
  setEstaEditando(false);
}

const removeContato = () => {
  if (window.confirm("Deseja realmente excluir este contato?")) {
    dispatch(removerContato(contato.id))
  }
}


    return(
          <CardBody>
            <PFP src="/src/assets/pfp_placeholder.jpg" />
            <ContainerCard>
              <DivCard>
                <label>Nome Completo:</label>
                <textarea disabled={!estaEditando} value={estaEditando ? nomeEditado : contato.nome} onChange={(e) => setNomeEditado(e.target.value)}/>
              </DivCard>
              <DivCard>
                <label>Telefone:</label>
                <textarea disabled={!estaEditando} value={estaEditando ? telEditado : contato.tel} onChange={(e) => setTelEditado(e.target.value)}/>
              </DivCard>
              <DivCard>
                <label>Email:</label>
                <textarea disabled={!estaEditando} value={estaEditando ? emailEditado : contato.email} onChange={(e) => setEmailEditado(e.target.value)}/>
              </DivCard>
            </ContainerCard>
            <DivCard>
              {estaEditando ? (
          <>
            <BTNConfirmar onClick={salvaEdicao}>Salvar</BTNConfirmar>
            <BTNRemover onClick={cancelaEdicao}>Cancelar</BTNRemover>
          </>
        ) : (
          <>
            <BTNConfirmar onClick={abrirEdicao}>Editar</BTNConfirmar>
            <BTNRemover onClick={removeContato}>Remover</BTNRemover>
          </>
        )}
            </DivCard>
          </CardBody>
    )
}