import { Container } from "./styles";

export function Input({
  labelFor,
  label,
  icon: Icon,
  id,
  type,
  placeholder,
  step,
  value,
  ...rest
}) {
  return (
    <Container {...rest}>
      <label htmlFor={id}>
        {Icon && <Icon />}
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        step={step}
        type={type}
        value={value}
      />
    </Container>
  );
}
