import React from "react";
import "./styles.scss";
import PropTypes from 'prop-types';
import ReactPlayer from "react-player";
const VideoPopup = ({ show, setShow, url }) => {
  const hidePopup = () => {
    setShow(false);
  };
  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={url}
          controls
          width="100%"
          height="100%"
          playing={show}
        />
      </div>
    </div>
  );
};

VideoPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default VideoPopup;
