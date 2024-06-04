import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";

import { Button } from "../../components/Button";

import { GoSignOut } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { PiReceiptLight } from "react-icons/pi";

import headerImage from "../../assets/foodExplorer.svg";
import adminHeaderImage from "../../assets/adminFoodExplorer.svg";

export function Header({ search }) {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate(`/`);
  }

  function handleToNew() {
    navigate(`/new`);
  }

  return (
    <Container>
      {USER_ROLE.CUSTOMER === user.role ? (
        <img src={headerImage} />
      ) : (
        <img src={adminHeaderImage} />
      )}
      <div className="input-wrapper">
        <IoIosSearch />
        <input
          type="text"
          placeholder="Busque por pratos ou ingredientes"
          onChange={e => search(e.target.value)}
        />
      </div>
      {USER_ROLE.ADMIN === user.role ? (
        <Button title="Novo Prato" onClick={handleToNew} />
      ) : (
        <Button icon={PiReceiptLight} title={`Pedidos (${0})`} />
      )}
      <GoSignOut onClick={handleSignOut} />
    </Container>
  );
}
