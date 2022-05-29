import React from "react";
import "../../App.css";
import Landing from "../../Components/landing/Landing";
import Special from "../../Components/Special/Special";
import ELegibility from "../../Components/ELegibility/ELegibility";
import Stay from "../../Components/Stay/Stay";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Landing />
      <Special />
      <ELegibility />
      <Stay />
      <Footer />
    </div>
  );
};

export default Home;
