import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Featured from "../Components/Home/Featured/Featured";
import Caraousal from "../Components/Home/CaraousalSection/Caraousal";

const Home = () => {
  const { name, email } = useSelector((state) => state.user.user);

  return (
    <div>
      <Featured />
      <Caraousal title="Trending" data={["Day", "Week"]} />
      <Caraousal title="What's Popular" data={["Movies", "Series"]} />
      <Caraousal title="TopRated" data={["Movies", "Series"]} />
      <Caraousal title="Recommended" data={["Movies", "Series"]} />
    </div>
  );
};

export default Home;
