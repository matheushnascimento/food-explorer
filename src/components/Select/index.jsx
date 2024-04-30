import { Container } from "./style";

export function Select({ label, children }) {
  return (
    <Container>
      <label>{label}</label>
      <select>{children}</select>
    </Container>
  );
}
