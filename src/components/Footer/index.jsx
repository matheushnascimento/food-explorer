import { Container } from "./styles";

import footerImage from "../../assets/gray-foodexplorer.svg";

export function Footer() {
  return (
    <Container>
      <img src={footerImage} alt="food explorer" />

      <p>&#169;2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
