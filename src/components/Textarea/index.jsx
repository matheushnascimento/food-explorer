import { Container } from "./styles";

export function Textarea({ label, value, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <textarea {...rest}>{value}</textarea>
    </Container>
  );
}
