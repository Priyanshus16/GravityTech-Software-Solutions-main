import React from "react";
import {Link} from "react-router-dom";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="formSection">
        <div className="formTitle">Get In Touch</div>
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-5"
            style={{ paddingLeft: "60px", paddingRight:"60px" }}
          >
            <label >Your Name*</label>
            <input type="text"></input>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-5"
            style={{ paddingLeft: "60px",  paddingRight:"60px" }}
          >
            <label >Mobile*</label>
            <input type="number"></input>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-5"
            style={{ paddingLeft: "60px", paddingRight:"60px" }}
          >
            <label >Your E-mail*</label>
            <input type="email"></input>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-5"
            style={{ paddingLeft: "60px", paddingRight:"60px" }}
          >
            <label >Subject*</label>
            <input type="text"></input>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-5"
            style={{ paddingLeft: "60px", paddingRight:"60px" }}
          >
            <label className="mb-3">Subject*</label>
            <textarea type="text"></textarea>
          </div>
        </div>
        <div className="row text-center">
            <div><Link to="/contact-us" className="contactUsBtn">Contact Us</Link></div>
        </div>
      </div>
    </>
  );
};
export default Form;
