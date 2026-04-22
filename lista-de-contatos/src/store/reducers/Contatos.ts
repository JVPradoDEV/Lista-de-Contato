import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Contato {
    id: string;
    nome: string;
    tel: string;
    email: string;
}

interface ContatosState{
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: [
        {
            id: '1',
            nome: 'Lucio Rodrigues',
            tel: '+55 51 9973-3221',
            email: 'luciorodrig1245@gmail.com'
        },
        {
            id: '2',
            nome: 'Jeferson Fernando',
            tel: '+55 51 9773-3431',
            email: 'jeffyugg03@gmail.com'
        },
        {
            id: '3',
            nome: 'Amanda Pereira',
            tel: '+55 58 9992-0922',
            email: 'amandapereira2000@gmail.com'
        }
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        removerContato: (state, action: PayloadAction<string>) => {
            state.itens = state.itens.filter((contato) => contato.id !== action.payload)
        },
        editarContato: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.itens.findIndex(
                (c) => c.id === action.payload.id
            )
            if (indexDoContato >= 0){
                state.itens[indexDoContato] = action.payload
            }
        },
        cadastrarContato: (state, action: PayloadAction<Contato>) => {
            const contatoJaExiste = state.itens.find(
                (c) => c.nome.toLowerCase() === action.payload.nome.toLowerCase()
            )

            if (contatoJaExiste) {
                alert('Já existe um contato com este nome!')
            } else {
                state.itens.push(action.payload)
            }
        }
            }
        })

export const { removerContato, editarContato, cadastrarContato } = contatosSlice.actions
export default contatosSlice.reducer