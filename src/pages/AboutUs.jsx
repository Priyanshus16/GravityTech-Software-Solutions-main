import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Form from "../components/shared/Form";
import AboutUsBody from "../components/aboutUs/AboutUsBody";

const AboutUs = () => {
  return (
    <>
      <Navbar></Navbar>
      <AboutUsBody></AboutUsBody>
      <div className="text-center">
        <Form></Form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
