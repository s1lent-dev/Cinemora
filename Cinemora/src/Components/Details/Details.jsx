import React from 'react';
import { useParams } from 'react-router-dom';
import { CaraousalData } from "../CaraousalSection/CaraousalData"
const Details = () => {
  // Accessing the id parameter from the route
  let { id } = useParams();

  return (
    <div>
      {CaraousalData.map((movie) => {
        if (movie.id == id) {
          return (
            <div className="img" key={movie.id}>
              <img src={movie.URL} alt="" style={{ width: "100%" , height: "100%", objectFit: "cover"}}/>
            </div>
          )
        }
      })}
    </div>
  );
}

export default Details;
