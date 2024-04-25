import { Card } from "../../components/Card";
import { Carousel } from "../../components/Carousel";
import { Header } from "../../components/Header";

import { Container } from "./styles";

import frame from "../../assets/BannerHome.png";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <img src={frame} alt="Sabores inigualáveis" />

        <section>
          <Carousel title="Refeições">
            <Card />
            <Card />
          </Carousel>
        </section>
      </main>
    </Container>
  );
}
