import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import Img from "../LazyLoading/Img";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const SingleFeatured = ({ movie }) => {
  return (
    <div className="SingleFeatured">
      <div className="Backdrop-img">
        <Img src={movie.URL} className={"lazy"} />
      </div>
      <div className="leftfade"></div>
      <div className="overlay"></div>
      <ContentWrapper>
        <div className="content">
          <div className="Info">
            <h3>{movie.title}</h3>
            <p>{movie.desc}</p>
          </div>
          <div className="Buttons">
            <button className="play">
              <PlayArrowIcon /> <span>Play</span>
            </button>
            <button className="more">
              <FavoriteBorderIcon />
              <span>Watchlist</span> 
              </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

SingleFeatured.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleFeatured;
