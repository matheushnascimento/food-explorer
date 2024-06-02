import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles";

import { Button } from "../../components/Button";

import image from "../../assets/foodExplorer.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const navigate = useNavigate();

  function handleSignIn() {
    signIn({ email, password });
    navigate("/");
  }
  return (
    <Container>
      <img src={image} alt="foodexplorer" />
      <Form>
        <h1>Faça login</h1>
        <div className="input-wrapper">
          <label>Email</label>
          <input
            type="text"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label>Senha</label>
          <input
            type="password"
            placeholder="No mínimo 6 caracteres"
            min="6"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta </Link>
      </Form>
    </Container>
  );
}
