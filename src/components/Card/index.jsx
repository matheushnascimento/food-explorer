import { Container } from "./styles";

import { PiPencilSimple } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../../assets/unavailableImage.png";
import { api } from "../../services/api";
export function Card({ data }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const imageURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : imagePlaceholder;
  async function handleDetails() {
    navigate(`/details/${data.id}`);
  }

  return (
    <Container onClick={handleDetails}>
      {USER_ROLE.ADMIN === user.role ? <PiPencilSimple /> : <CiHeart />}
      <img src={imageURL} />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <span>R${data.price}</span>
    </Container>
  );
}
