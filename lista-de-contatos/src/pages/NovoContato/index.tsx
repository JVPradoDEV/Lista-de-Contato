import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cadastrarContato } from '../../store/reducers/Contatos';
import { AddContainer, AddBody, AddDiv, BTNVoltar, BTNConfirmar } from './styles';

const NovoContato = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');

    const salvar = (e: React.FormEvent) => {
    e.preventDefault();
    
    dispatch(cadastrarContato({
        id: Math.random().toString(),
        nome,
        tel,
        email
    }));
    
    navigate('/');
    };

    return (
        <>
        <h1>Novo Contato</h1>
    <AddBody onSubmit={salvar}>
        <img src="https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-default-avatar-profile-icon-gray-placeholder-vector-png-image_16213764.png"/>
        <AddContainer>
            <AddDiv>
                <label>Nome Completo:</label>
                <input value={nome} onChange={(e) => setNome(e.target.value)} required />
            </AddDiv>
            <AddDiv>
                <label>Telefone:</label>
                <input value={tel} onChange={(e) => setTel(e.target.value)} required />
            </AddDiv>
            <AddDiv>
                <label>Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} required />
            </AddDiv>
        <BTNConfirmar>Confirmar</BTNConfirmar>
            </AddContainer>
    </AddBody>
        <BTNVoltar onClick={() => navigate('/')}>Voltar a página principal</BTNVoltar>
        </>
    );
};

export default NovoContato;