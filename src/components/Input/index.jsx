import { Container } from "./styles";

export function Input({
  labelFor,
  label,
  icon: Icon,
  type,
  placeholder,
  ...rest
}) {
  return (
    <Container {...rest}>
      <label htmlFor={labelFor}>
        {Icon && <Icon />}
        {label}
      </label>
      <input type={type} name={labelFor} placeholder={placeholder} />
    </Container>
  );
}
