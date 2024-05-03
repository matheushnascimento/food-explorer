import { Container } from "./styles";

import { Button } from "../../components/Button";

import { GoSignOut } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { PiReceiptLight } from "react-icons/pi";

import headerImage from "../../assets/foodExplorer.svg";
import adminHeaderImage from "../../assets/adminFoodExplorer.svg";

import { USER_ROLE } from "../../utils/roles";

export function Header() {
  return (
    <Container>
      {USER_ROLE.ADMIN === "admin" ? (
        <img src={adminHeaderImage} alt="foodExplorerAdmin" />
      ) : (
        <img src={headerImage} alt="foodExplorerAdmin" />
      )}

      <div className="input-wrapper">
        <IoIosSearch />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </div>
      {USER_ROLE.ADMIN === "admin" ? (
        <Button title="Novo Prato" />
      ) : (
        <Button icon={PiReceiptLight} title={`Pedidos (${0})`} />
      )}
      <GoSignOut />
    </Container>
  );
}
