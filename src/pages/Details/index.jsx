import { Container } from "./styles";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Ingredient } from "../../components/Ingredient";

import { PiCaretLeftBold } from "react-icons/pi";

export function Details() {
  const ingredients = ["alface", "cebola", " pão", " rabanete", " tomate"];
  return (
    <Container>
      <Header />

      <main>
        <div>
          <PiCaretLeftBold />
          <a href="#">Voltar</a>
        </div>
        <section>
          <img
            src={`https://foodish-api.com/images/pizza/pizza${parseInt(
              Math.random() * 90
            )}.jpg`}
          />
          <div>
            <h1>Pizza Marguerita</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <ul>
              {ingredients &&
                ingredients.map(ingredient => (
                  <Ingredient title={ingredient} />
                ))}
            </ul>
            <Button title="Editar pato" />
          </div>
        </section>
      </main>

      <Footer />
    </Container>
  );
}
