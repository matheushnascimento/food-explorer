import { Container } from "./styles";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Ingredient } from "../../components/Ingredient";

import { PiCaretLeftBold } from "react-icons/pi";
import { FaMinus, FaPlus } from "react-icons/fa";

import { USER_ROLE } from "../../utils/roles";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Details() {
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

  function handleToEdit() {
    navigate(`/edit/${params.id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setData(response.data);
        const { name, category, price, description, ingredients } =
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

      <main>
        <div>
          <PiCaretLeftBold />
          <Link to="/">Voltar</Link>
        </div>
        <section>
          <img
            src={`https://foodish-api.com/images/pizza/pizza${parseInt(
              Math.random() * 90
            )}.jpg`}
          />
          <div>
            <h1>{name}</h1>
            <p>{description}</p>

            <ul>
              {ingredients &&
                ingredients.map((ingredient, index) => (
                  <Ingredient key={String(index)} title={ingredient} />
                ))}
            </ul>
            {USER_ROLE.ADMIN === user.role ? (
              <Button title="Editar prato" onClick={handleToEdit} />
            ) : (
              <div>
                <span id="quantity">
                  <FaMinus id="minus_button" /> 01 <FaPlus id="plus_button" />
                </span>
                <Button title="Incluir R$25,00" />
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </Container>
  );
}
