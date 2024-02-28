import React, { useState } from "react";
import "./JobApplyBody.css";
import axios from "axios";

const JobApplyBody = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [file, setFile] = useState("");

  function handleButtonClick() {
    const postData = {
      Name: name,
      Email: email,
      Mobile: mobile,
      JobTitle: JobTitle,
    };

    const postcv = {
      JobId: 1234,
      file: file,
    };

    axios
      .post(
        "https://gravitytech.azurewebsites.net/api/v1/CreateJobDetails",
        postData
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    axios
      .post(
        "https://gravitytech.azurewebsites.net/api/v1/uploadCVOnJobApply",
        postcv
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setName("");
    setEmail("");
    setMobile("");
    setJobTitle("");
    setFile("")
  }

  return (
    <>
      <div className="container homeBody">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12  mb-3">
            <h1 className="viewDetailsTitle mb-3">
              We're looking for brilliant minds to join our top-notch team and
              make it even better.
            </h1>
            <div className="viewDetailsTitle">Are you ready?</div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 text-center mb-3">
            <img
              src="./assets/viewdetailspageimage.png"
              className="img-fluid"
              alt="img"
            ></img>
          </div>
        </div>
      </div>
      <div style={{ background: "#D9D9D9" }}>
        <div className="container pb-5 pt-4">
          <div className="jobapplytitle mb-4">Job Apply</div>
          <div
            style={{
              background: "#F5F4F0",
              borderRadius: "20px",
              padding: "4%",
            }}
          >
            <div className="row mb-3">
              <div className="col-lg-4 col-md-4 col-sm-12 text-center mb-2">
                <div className="label">Name :</div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 text-center mb-2">
                <input
                  type="text"
                  style={{ border: "1px solid #000000", width: "70%" }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-4 col-md-4 col-sm-12 text-center mb-2">
                <div className="label">Your Email :</div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 text-center mb-2">
                <input
                  type="email"
                  style={{ border: "1px solid #000000", width: "70%" }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-4 col-md-4 col-sm-12 text-center mb-2">
                <div className="label">Your Phone no :</div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 text-center mb-2">
                <input
                  type="number"
                  style={{ border: "1px solid #000000", width: "70%" }}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-4 col-md-4 col-sm-12 text-center mb-2">
                <div className="label">Job Title :</div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 text-center mb-2">
                <input
                  type="text"
                  style={{ border: "1px solid #000000", width: "70%" }}
                  onChange={(e) => {
                    setJobTitle(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-4 col-md-4 col-sm-12 text-center mb-3">
                <div className="label">Upload Your Cv / Resume :</div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 text-center mb-3">
                <input style={{ width: "70%" }} type="file" onChange={(e) => {
                    setFile(e.target.value);
                  }}></input>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-4 col-md-4 col-sm-12 text-center mb-2">
                <div className="label"></div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 text-center mb-2">
                <input type="checkbox" name="checkbox" id="checkbox"></input>
                <label htmlFor="checkbox" className="ms-3">
                  I Accept
                  <span style={{ textDecoration: "underline" }}>
                    Terms And Condition
                  </span>
                </label>
                <div>
                  <button className="applyBtn" onClick={handleButtonClick}>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobApplyBody;
