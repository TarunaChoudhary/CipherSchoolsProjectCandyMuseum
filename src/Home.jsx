import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import { NavLink } from "react-router-dom";
import i1 from "../src/images/hand2.png"
import "./index.css"
import Common from "./Common";


const Home = () =>{
 return(
  <>
  <Common

   imgsrc={i1} 
   
   />
  </>
 );

};

export default Home;