import { Container } from "./styles";

export function Input({
  labelFor,
  label,
  icon: Icon,
  id,
  type,
  placeholder,
  ...rest
}) {
  return (
    <Container {...rest}>
      <label htmlFor={id}>
        {Icon && <Icon />}
        {label}
      </label>
      <input type={type} id={id} placeholder={placeholder} />
    </Container>
  );
}
