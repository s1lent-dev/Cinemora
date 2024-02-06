import React from "react";
import "./styles.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { CaraousalData } from "./CaraousalData";
import SingleCaraousal from "./SingleCaraousal";
import Switch from "./Switch";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Caraousal = ({ title, data }) => {
  return (
    <div className="Caraousal">
      <ContentWrapper>
        <div className="Top">
          <h4>{title}</h4>
          <Switch data={data} />
        </div>
        <div className="Bottom">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            navigation={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {CaraousalData.map(
              (movie, index) => (
                console.log("movie_URL", movie.URL),
                (
                  <SwiperSlide key={movie?.title}>
                    <SingleCaraousal movie={movie} />
                  </SwiperSlide>
                )
              )
            )}
          </Swiper>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Caraousal;
