import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Featured from "../Components/Home/Featured/Featured"
const Home = () => {
  const { name, email } = useSelector((state) => state.user.user);
  return (
    <div style={{width:"100%", height:"100vh"}}>
        <Featured />
    </div>
  );
};

export default Home;
