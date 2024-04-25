import { Container } from "./styles";

export function Carousel({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>{children}</div>
    </Container>
  );
}
