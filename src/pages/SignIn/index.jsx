import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

import image from "../../assets/foodexplorer.svg";

export function SignIn() {
  return (
    <Container>
      <img src={image} alt="foodexplorer" />
      <Form>
        <h1>Faça login</h1>
        <div className="input-wrapper">
          <label>Email</label>
          <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </div>
        <div className="input-wrapper">
          <label>Senha</label>
          <input type="text" placeholder="No mínimo 6 caracteres" min="6" />
        </div>
        <Button title="Entrar" />

        <a href="#">Criar uma conta </a>
      </Form>
    </Container>
  );
}
