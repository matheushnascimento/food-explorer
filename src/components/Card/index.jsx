import { Container } from "./styles";

import { PiPencilSimple } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function Card({ data }) {
  const { user } = useAuth();

  return (
    <Container>
      {USER_ROLE.ADMIN === user.role ? <PiPencilSimple /> : <CiHeart />}
      <img />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <span>R${data.price}</span>
    </Container>
  );
}
