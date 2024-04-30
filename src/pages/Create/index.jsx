import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Ingredient } from "../../components/Ingredient";
import { Input } from "../../components/Input";

import { PiCaretLeftBold, PiUploadSimple } from "react-icons/pi";

export function Create() {
  const ingredients = ["alface", "cebola", " pão", " rabanete", " tomate"];
  return (
    <Container>
      <Header />
      <main>
        <div>
          <PiCaretLeftBold />
          <a href="#">Voltar</a>
        </div>
        <h1>Adicionar prato</h1>
        <Form>
          <section>
            <div className="input-wrapper">
              <div id="dishImage">
                <span>Imagem do prato</span>
                <Input
                  labelFor="image"
                  icon={PiUploadSimple}
                  label="Selecionar imagem"
                  type="file"
                />
              </div>
            </div>
            <Input
              label="Nome"
              type="text"
              id="name"
              placeholder="Ex.: Salada Ceasar"
            />
            <div className="input-wrapper">
              <label>Categoria</label>
              <select>
                <option>Refeição</option>
                <option>Sobremesa</option>
                <option>Bebida</option>
              </select>
            </div>
          </section>

          <section>
            <div className="input-wrapper">
              <label>Ingredientes</label>

              {ingredients &&
                ingredients.map(ingredient => (
                  <Ingredient title={ingredient} />
                ))}
            </div>
            <div className="input-wrapper">
              <Input label="Preço" type="number" placeholder="R$ 00,00" />
            </div>
          </section>

          <textarea name="" id="" cols="30" rows="10"></textarea>
        </Form>
        <Button title="Salvar alterações" />
      </main>
      <Footer />
    </Container>
  );
}
