import { Container } from "./styles";

import { PiPencilSimple } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";

export function Card({ data }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleDetails() {
    navigate(`/details/${data.id}`);
  }

  return (
    <Container onClick={handleDetails}>
      {USER_ROLE.ADMIN === user.role ? <PiPencilSimple /> : <CiHeart />}
      <img
        src={`https://foodish-api.com/images/pizza/pizza${parseInt(
          Math.random() * 90
        )}.jpg`}
      />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <span>R${data.price}</span>
    </Container>
  );
}
