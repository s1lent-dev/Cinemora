import React from 'react'

const SingleFeatured = ({movie}) => {

    const {title, URL, desc} = movie
  return (
    <div className='Featured'>
      <div className="Wrapper">
        <img src="" alt="" />
        <div className="Info">
            <h3></h3>
            <p></p>
        </div>
        <div className="Buttons">
            <button></button>
            <button></button>
        </div>
      </div>
    </div>
  )
}

export default SingleFeatured
