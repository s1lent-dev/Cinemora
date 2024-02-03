import React from "react";
import './styles.scss';
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
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


import SingleFeatured from "./SingleFeatured";

const FeaturedMovies = [
    {
        id: 1,
        title: "Oppenheimer",
        URL: "/Cinemora/Images/Movies/Oppenheimer.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quidem!", 
    },
    {
        id: 2,
        title: "Avengers Endgame",
        URL: "/Cinemora/Images/Movies/Endgame.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quidem!", 
    },
    {
        id: 3,
        title: "Inception",
        URL: "/Cinemora/Images/Movies/Inception.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quidem!", 
    },
    {
        id: 4,
        title: "Interstellar",
        URL: "/Cinemora/Images/Movies/Interstellar.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quidem!", 
    },
    {
        id: 5,
        title: "Tenet",
        URL: "/Cinemora/Images/Movies/Tenet.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quidem!", 
    },
    {
        id: 6,
        title: "Peaky Blinders",
        URL: "/Cinemora/Images/Movies/Peaky Blinders.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quidem!", 
    }
];

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
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {FeaturedMovies.map((movie) => (
            console.log("movie_URL", movie.URL),
            <SwiperSlide key={movie?.id}>
              <img src={movie?.URL} alt="" style={{ width: "100%" , height: "100vh", objectFit: "cover", position: "relative"}} />
              <div className="Info" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <h3>{movie.title}</h3>
                <p>{movie.desc}</p>
              </div>
              <div className="Buttons" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <button>Watch Now</button>
                <button>Watchlist</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
