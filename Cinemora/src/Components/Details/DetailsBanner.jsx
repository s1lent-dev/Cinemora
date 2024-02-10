import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CaraousalData } from "../CaraousalSection/CaraousalData";
import Img from "../LazyLoading/Img";
import Rating from "../CircleRating/Rating";
import { PlayIcon } from "./PLayIcon";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import VideoPopup from "../video/VideoPopup";
const DetailsBanner = () => {

  const [show, setShow] = useState(false);
  const handlePlayClick = () => {
    setShow(true); // Show the video popup when play is clicked
  };

  console.log(show);

  let { id } = useParams();
  return (
    <div className="detailsBanner">
      {CaraousalData.map((movie, index) => {
        if (movie.id == id) {
          return (
            <>
              <div className="backdrop-img" key={movie.id}>
                <Img src={movie.URL} alt="" className="lazy" />
              </div>
              <div className="opacity-layer" />
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    <Img src={movie.URL} alt="" className="posterImg" />
                  </div>
                  <div className="right">
                    <div className="title">{movie.title}</div>
                    <div className="subtitle">{movie.subtitle}</div>
                    <div className="genres">{movie.genre}</div>
                    <div className="row">
                      <Rating rating={movie.Ratings} className="circleRating" />
                      <div className="playbtn" onClick={handlePlayClick}>
                        <PlayIcon />
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>
                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{movie.desc}</div>
                      <div className="info">
                        <div className="infoItem">
                          <span className="text bold">Realeased Date</span>
                          <span className="text">{movie.Date}</span>
                        </div>
                        <div className="infoItem">
                          <span className="text bold">Duration</span>
                          <span className="text">{movie.duration}</span>
                        </div>
                      </div>
                      <div className="info">
                        <div className="infoItem">
                          <span className="text bold">Director</span>
                          <span className="text">{`${movie.director + " "}`}</span>
                        </div>
                      </div>
                      <div className="info">
                        <div className="infoItem">
                          <span className="text bold">Writer</span>
                          <span className="text">{`${movie.writer}`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <VideoPopup show={show} setShow={setShow} url={movie.trailer} />
              </ContentWrapper>
            </>
          );
        }
      })}
    </div>
  );
};

export default DetailsBanner;
