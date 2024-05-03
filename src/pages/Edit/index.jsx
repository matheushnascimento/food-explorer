import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IngredientTag } from "../../components/IngredientTag";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";

import { PiCaretLeftBold, PiUploadSimple } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";

export function Edit() {
  const ingredients = [];
  return (
    <Container>
      <Header />
      <main>
        <div>
          <PiCaretLeftBold />
          <a href="#">Voltar</a>
        </div>
        <h1>Editar prato</h1>
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

          <Textarea
            label="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
          <div className="button-wrapper">
            <Button id="delete_button" title="Salvar alterações" />
            <Button id="submit_button" title="Salvar alterações" />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
