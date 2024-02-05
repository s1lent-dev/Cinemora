import React from "react";
import PropTypes from 'prop-types';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Img = ({ src, className }) => {
  return (
    <LazyLoadImage className={className || ""} src={src} alt="" effect="blur" />
  );
};

Img.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
  };

export default Img;