import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

import image from "../../assets/foodexplorer.svg";

export function SignUp() {
  return (
    <Container>
      <img src={image} alt="foodexplorer" />
      <Form>
        <h1>Crie sua conta</h1>
        <div className="input-wrapper">
          <label>Seu nome</label>
          <input type="text" placeholder="Exemplo: Maria da Silva" />
        </div>
        <div className="input-wrapper">
          <label>Email</label>
          <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </div>
        <div className="input-wrapper">
          <label>Senha</label>
          <input type="text" placeholder="No mínimo 6 caracteres" min="6" />
        </div>
        <Button title="Criar Conta" />

        <a href="#">Já tenho uma conta </a>
      </Form>
    </Container>
  );
}
