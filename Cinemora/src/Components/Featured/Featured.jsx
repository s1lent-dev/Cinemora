import React from "react";
import "./styles.scss";
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
import { FeaturedMovies } from "./Sliderdata";
import SingleFeatured from "./SingleFeatured";


const Featured = () => {
  return (
    <div className="Featured">
      <div className="Container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {FeaturedMovies.map((movie, index) => (
            console.log("movie_URL", movie.URL),
            <SwiperSlide key={movie?.id}>
              <SingleFeatured movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
