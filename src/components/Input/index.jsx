import { Container } from "./styles";

export function Input({ labelFor, label, icon: Icon, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>
        {Icon && <Icon />}
        {label}
      </label>
      <input {...rest} id={id} />
    </Container>
  );
}
