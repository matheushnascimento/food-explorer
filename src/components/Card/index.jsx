import { Container } from "./styles";

import { PiPencilSimple } from "react-icons/pi";

export function Card() {
  return (
    <Container>
      <PiPencilSimple />
      <img
        src={`https://foodish-api.com/images/pizza/pizza${parseInt(
          Math.random() * 90
        )}.jpg`}
      />
      <h3>Pizza Margherita</h3>
      <p>Massa fresca, mussarela e manjericão</p>
      <span>R$75,50</span>
    </Container>
  );
}
