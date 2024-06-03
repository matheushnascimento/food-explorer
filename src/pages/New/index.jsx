import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";

import { PiCaretLeftBold, PiUploadSimple } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IngredientTag } from "../../components/IngredientTag";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";

export function New() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    );
  }
  return (
    <Container>
      <Header />
      <main>
        <div>
          <PiCaretLeftBold />
          <Link to="/">Voltar</Link>
        </div>
        <h1>Adicionar prato</h1>
        <Form>
          <section>
            <div id="dishImage">
              <span>Imagem do prato</span>
              <Input
                icon={PiUploadSimple}
                label="Selecionar imagem"
                type="file"
                id="image"
              />
            </div>
            <Input
              label="Nome"
              type="text"
              id="name"
              placeholder="Ex.: Salada Ceasar"
            />
            <Select className="category" label="Categoria">
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
                  ingredients.map((ingredient, index) => (
                    <IngredientTag
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}
                <IngredientTag
                  $isnew={true}
                  onChange={e => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
                />
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
          <Button id="submit_button" title="Salvar alterações" />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
