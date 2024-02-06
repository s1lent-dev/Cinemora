import React from 'react'
import "./styles.scss"
import PropTypes from "prop-types"
import Img from "../LazyLoading/Img"
import Rating from "../CircleRating/Rating"
const SingleCaraousal = ({movie}) => {
  return (
    <div className="SingleCaraousal">
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
    title: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
    Ratings: PropTypes.string.isRequired,
    Date: PropTypes.string.isRequired
  })
}

export default SingleCaraousal
