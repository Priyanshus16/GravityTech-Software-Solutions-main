import React from "react";
import FullstackBody from "../components/fullstack/FullstackBody";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const FullStack = () => {
  return (
    <div>
      <Navbar></Navbar>
      <FullstackBody></FullstackBody>
      <Footer></Footer>
    </div>
  );
};

export default FullStack;
