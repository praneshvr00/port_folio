import React from "react";
import { Outlet } from "react-router";
import Myprofile from "../components/Myprofile";
import Navbar from "../components/Navbar";
import SkillSets from "../components/SkillSets";
import AboutMe from "./../components/AboutMe";
import Footer from "./../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Myprofile />
      <AboutMe/>
      <SkillSets />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Home;
