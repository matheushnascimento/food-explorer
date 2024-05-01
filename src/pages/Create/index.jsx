import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IngredientTag } from "../../components/IngredientTag";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";

import { PiCaretLeftBold, PiUploadSimple } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";

export function Create() {
  const ingredients = [
    "alface",
    "cebola",
    " pão",
    " rabanete",
    " tomate",
    "alface",
    "cebola",
    " pão",
    " rabanete",
    " tomate",
  ];
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
            <div id="dishImage">
              <span>Imagem do prato</span>
              <Input
                labelFor="image"
                icon={PiUploadSimple}
                label="Selecionar imagem"
                type="file"
              />
            </div>
            <Input
              label="Nome"
              type="text"
              id="name"
              placeholder="Ex.: Salada Ceasar"
            />
            <Select label="Categoria">
              <option>Refeição</option>
              <option>Sobremesa</option>
              <option>Bebida</option>
              <FaChevronDown />
            </Select>
          </section>

          <section>
            <div className="input-wrapper">
              <label id="ingredients_label">Ingredientes</label>
              <ul>
                {ingredients &&
                  ingredients.map(ingredient => (
                    <IngredientTag value={ingredient} />
                  ))}
                <IngredientTag $isnew={true} />
              </ul>
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
