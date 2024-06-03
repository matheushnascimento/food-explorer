import { Container } from "./style";

export function Select({ label, children, ...rest }) {
  return (
    <Container {...rest}>
      <label>{label}</label>
      <select>{children}</select>
    </Container>
  );
}
