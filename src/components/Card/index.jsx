import { Container } from "./styles";

import { PiPencilSimple } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

import { USER_ROLE } from "../../utils/roles";

export function Card() {
  return (
    <Container>
      {USER_ROLE.ADMIN === "admin" ? <PiPencilSimple /> : <CiHeart />}
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
