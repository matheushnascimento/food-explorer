import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

import { Card } from "../../components/Card";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import frame from "../../assets/BannerHome.png";

export function Home() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get("dishes");
      setDishes(response.data);
    }

    fetchDishes();
  }, []);
  return (
    <Container>
      <Header />
      <main>
        <img src={frame} alt="Sabores inigualáveis" />
        {dishes.filter(dish => dish.category == "refeicao").length > 0 && (
          <Carousel
            title="Refeição"
            slidesPerView={3}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {dishes
              .filter(dish => dish.category == "refeicao")
              .map((item, index) => (
                <SwiperSlide key={String(index)}>
                  <Card data={item} />
                </SwiperSlide>
              ))}
          </Carousel>
        )}
        {dishes.filter(dish => dish.category == "sobremesa").length > 0 && (
          <Carousel
            title="Sobremesa"
            slidesPerView={3}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {dishes
              .filter(dish => dish.category == "sobremesa")
              .map((item, index) => (
                <SwiperSlide key={String(index)}>
                  <Card data={item} />
                </SwiperSlide>
              ))}
          </Carousel>
        )}
        {dishes.filter(dish => dish.category == "bebida").length > 0 && (
          <Carousel
            title="Bebidas"
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {dishes
              .filter(dish => dish.category == "bebida")
              .map((item, index) => (
                <SwiperSlide key={String(index)}>
                  <Card data={item} />
                </SwiperSlide>
              ))}
          </Carousel>
        )}
      </main>
      <Footer />
    </Container>
  );
  z;
}
