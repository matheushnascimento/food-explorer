//#region imports
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { USER_ROLE } from "../../utils/roles";

import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IngredientTag } from "../../components/IngredientTag";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";

import { PiCaretLeftBold, PiUploadSimple } from "react-icons/pi";
//#endregion
export function Edit() {
  //#region variables
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { user } = useAuth();

  const params = useParams();
  const navigate = useNavigate();
  //#endregion

  //#region functions

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    );
  }

  async function handleDeleteDish() {
    await api.delete(`/dishes/${params.id}`).then(() => {
      alert("Prato excluído com sucesso!");
      navigate("/");
    });
  }

  async function handleUpdateDish() {
    if (!name || !category || !price || !description) {
      return alert("Preencha todos os campos corretamente!");
    }

    const formData = new FormData();

    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    ingredients.map(ingredient => formData.append("ingredient", ingredient));
    await api
      .put(`/dishes/${params.id}`, formData)
      .then(() => {
        alert("Alteração concluída com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if (error.response.message) {
          alert(error.response.message);
        } else {
          alert(error);
        }
      });
  }
  //#endregion

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setData(response.data);
        const { ingredients, name, category, price, description } =
          response.data;
        setName(name);
        setCategory(category);
        setPrice(price);
        setDescription(description);
        setIngredients(ingredients.map(ingredient => ingredient.name));
      } catch (err) {
        console.log(err);
      }
    }
    fetchDishes();
  }, []);

  return (
    <Container>
      <Header />
      {USER_ROLE.ADMIN === user.role ? (
        <main>
          <div>
            <PiCaretLeftBold />
            <Link to="/">Voltar</Link>
          </div>
          <h1>Editar prato</h1>
          <Form>
            <section>
              <div id="dishImage">
                <span>Imagem do prato</span>
                <Input
                  icon={PiUploadSimple}
                  label={image ? `${image.name}` : "Selecionar imagem"}
                  type="file"
                  id="image"
                  onChange={e => setImage(e.target.files[0])}
                />
              </div>
              <Input
                label="Nome"
                type="text"
                id="name"
                placeholder="Ex.: Salada Ceasar"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Select
                label="Categoria"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="default">Escolha uma categoria</option>
                <option value="refeicao">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
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
                <Input
                  label="Preço"
                  type="number"
                  placeholder="R$ 00,00"
                  step="any"
                  value={parseFloat(price).toFixed(2)}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </section>

            <Textarea
              label="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              defaultValue={description}
              onChange={e => setDescription(e.target.value)}
            />
            <div className="button-wrapper">
              <Button
                id="delete_button"
                title="Excluir prato"
                onClick={handleDeleteDish}
              />
              <Button
                id="submit_button"
                title="Salvar alterações"
                onClick={handleUpdateDish}
              />
            </div>
          </Form>
        </main>
      ) : (
        navigate("/")
      )}
      <Footer />
    </Container>
  );
}
