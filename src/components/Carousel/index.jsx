import { Container } from "./styles";
import { Swiper } from "swiper/react";

export function Carousel({ title, children, ...rest }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper {...rest}>{children}</Swiper>
    </Container>
  );
}
