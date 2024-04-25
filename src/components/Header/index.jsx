import { Container } from "./styles";

import { Button } from "../../components/Button";

import { GoSignOut } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { PiReceiptLight } from "react-icons/pi";

import headerImage from "../../assets/foodexplorer.svg";

export function Header() {
  return (
    <Container>
      <img src={headerImage} alt="foodexplorer" />
      <div className="input-wrapper">
        <IoIosSearch />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </div>
      <Button icon={PiReceiptLight} title={`Pedidos (${0})`} />
      <GoSignOut />
    </Container>
  );
}
