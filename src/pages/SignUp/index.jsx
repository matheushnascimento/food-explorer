import { useState } from "react";

import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

import image from "../../assets/foodExplorer.svg";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSingUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }
  return (
    <Container>
      <img src={image} alt="food explorer" />
      <Form>
        <h1>Crie sua conta</h1>
        <div className="input-wrapper">
          <label>Seu nome</label>
          <input
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={e => setName(e.target.value)}
          />
        </div>
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
        <Button title="Criar Conta" onClick={handleSingUp} />

        <Link to="/">Já tenho uma conta </Link>
      </Form>
    </Container>
  );
}
