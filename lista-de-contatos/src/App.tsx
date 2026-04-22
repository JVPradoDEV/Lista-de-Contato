import { BrowserRouter, Route, Routes } from "react-router-dom";
import BotaoAdicionar from "./components/BotaoAdicionar";
import ListaCard from "./components/ListaCard";
import { Container, EstiloGlobal } from "./styles";
import NovoContato from "./pages/NovoContato";

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Container>
        <Routes>
        <Route path="/" element={
          <>
          <h1>Lista de Contatos</h1>
          <ListaCard />
          <BotaoAdicionar to="/novo">+</BotaoAdicionar>
          </>
        } />
        <Route path="/novo" element={<NovoContato />}/>

        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
