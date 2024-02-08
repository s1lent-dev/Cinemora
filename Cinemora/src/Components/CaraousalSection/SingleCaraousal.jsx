import React from 'react'
import "./styles.scss"
import PropTypes from "prop-types"
import Img from "../LazyLoading/Img"
import Rating from "../CircleRating/Rating"
import { useNavigate } from 'react-router-dom';
const SingleCaraousal = ({movie}) => {

  const navigate = useNavigate();

  const navigationHandler = (type) => {
    if (type === `${movie?.type}`) {
      navigate(`/Cinemora/${movie?.type}/${movie?.id}`);
    } else {
      navigate(`/Error`);
    }
  };
  return (
    <div className="SingleCaraousal" onClick={() => navigationHandler(`${movie?.type}`)}>
        <div className="Wrapper">
            <div className="movie-img">
            <Img src={movie?.URL} />
            <Rating rating={movie?.Ratings} />
            </div>
            <div className="movie-info">
               
                <h4>{movie?.title}</h4>
                <p>{movie?.Date}</p>
            </div>
        </div>
    </div>
  )
}

SingleCaraousal.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
    Ratings: PropTypes.string.isRequired,
    Date: PropTypes.string.isRequired
  })
}

export default SingleCaraousal
