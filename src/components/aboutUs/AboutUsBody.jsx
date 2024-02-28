import React from "react";
import "./AboutUsBody.css";

const AboutUsBody = () => {
  return (
    <>
      <div className="container homeBody">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 text-center mb-3">
            <h1 className="bodyTitle">
              It’s always about <br></br> YOU at Gravity Tech
            </h1>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 text-center mb-3">
            <img src="./assets/img3.png" alt="img" className="img-fluid"></img>
          </div>
        </div>
      </div>

      <div className="divTwo">
        <div className="container text-center">
          <div className="divTitle">Why us?</div>
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
              <div className="cardBody d-flex align-items-center flex-column justify-content-center">
                <div className="iconDiv d-flex align-items-center justify-content-center mb-4">
                  <img src="./assets/Icon12.png" alt="img"></img>
                </div>
                <div className="cardBodyContent">One-stop Solutions</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
              <div className="cardBody d-flex align-items-center flex-column justify-content-center">
                <div className="iconDiv d-flex align-items-center justify-content-center mb-4">
                  <img src="./assets/Icon2.png" alt="img"></img>
                </div>
                <div className="cardBodyContent">Continuous Improvement</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
              <div className="cardBody d-flex align-items-center flex-column justify-content-center">
                <div className="iconDiv d-flex align-items-center justify-content-center mb-4">
                  <img src="./assets/Icon3.png" alt="img"></img>
                </div>
                <div className="cardBodyContent">
                  Strong Technical Expertise
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
              <div className="cardBody d-flex align-items-center flex-column justify-content-center">
                <div className="iconDiv d-flex align-items-center justify-content-center mb-4">
                  <img src="./assets/Icon4.png" alt="img"></img>
                  <img src="./assets/Icon5.png" alt="img"></img>
                </div>
                <div className="cardBodyContent">Priority to Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divThree">
        <div className="container p-2">
          <div className="divTwoPhoneTitle mb-1 mt-2">
            It all started with a<br /> Dream and a Challenge.
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 text-center d-flex align-items-center justify-content-center">
              <img
                src="./assets/image14.png"
                alt="img"
                className="img-fluid"
              ></img>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 text-center mb-3 p-3">
              <div className="divTwoTitle">
                It all started with a<br /> Dream and a Challenge.
              </div>
              <div className="divTwoParagraph">
                Gravity Tech was launched in the year 2016. Within this short
                span of time, we have mastered the craft of Web Development, App
                Development and Cloud Computing, ensuring that the client
                businesses flourish and create a unique brand experience for
                their dear customers. At our software development company, we
                create digital solutions for international corporations, small
                businesses and other organizations with an aim to open up new
                possibilities for expansion, process automatization, and
                continuous improvement. We are a team of experienced developers,
                creators, designers and project managers you can rely on. Our
                Priority is to Fulfill all Requirements of Clients & Deliver
                Best Software to their Needs. We Build Mobile Applications, Web
                Applications According to Exact Clients Demands.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsBody;
