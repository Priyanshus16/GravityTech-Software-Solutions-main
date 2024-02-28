import React from "react";
import { Link } from "react-router-dom";
import "./CareerBody.css";

const CareerBody = () => {
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
      <div style={{ background: "#F5F4F0" }}>
        <div className="container ps-4 pe-4">
          <div className="recommendedjob pt-4">Recommended Job :</div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 p-2 mb-3">
              <div className="jobtitle">
                Full Stack developer Java/Python/PHP/.Net
              </div>
              <div className="fulltime">Full Time</div>
              <div className="req">Requirements :</div>
              <div className="d-flex align-items-center">
                <div className="circle"></div>
                <div className="experience">1-2 year experience</div>
              </div>
              <div>
                <Link to="/fullStack" className="viewDetailsbtn">
                  View Details
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 p-2 mb-3">
              <div className="jobtitle">QA Engineer (Software Tester)</div>
              <div className="fulltime">Full Time</div>
              <div className="req">Requirements :</div>
              <div className="d-flex align-items-center">
                <div className="circle"></div>
                <div className="experience">1-2 year experience</div>
              </div>
              <div>
                <Link to="/testingEngineer" className="viewDetailsbtn">
                  View Details
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 p-2 mb-3">
              <div className="jobtitle">Front End Developer</div>
              <div className="fulltime">Full Time</div>
              <div className="req">Requirements :</div>
              <div className="d-flex align-items-center">
                <div className="circle"></div>
                <div className="experience">Fresher</div>
              </div>
              <div>
                <Link to="/frontendDeveloper" className="viewDetailsbtn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 p-2 mb-3">
              <div className="jobtitle">Devops Engineer</div>
              <div className="fulltime">Full Time</div>
              <div className="req">Requirements :</div>
              <div className="d-flex align-items-center">
                <div className="circle"></div>
                <div className="experience">1-2 year experience</div>
              </div>
              <div>
                <Link to="/devopsEngineer" className="viewDetailsbtn">
                  View Details
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 p-2 mb-3">
              <div className="jobtitle">Data Analyst</div>
              <div className="fulltime">Full Time</div>
              <div className="req">Requirements :</div>
              <div className="d-flex align-items-center">
                <div className="circle"></div>
                <div className="experience">1-2 year experience</div>
              </div>
              <div>
                <Link to="/dataEntry" className="viewDetailsbtn">
                  View Details
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 p-2 mb-3">
              <div className="jobtitle">Trainee Software developer</div>
              <div className="fulltime">Full Time</div>
              <div className="req">Requirements :</div>
              <div className="d-flex align-items-center">
                <div className="circle"></div>
                <div className="experience">Fresher</div>
              </div>
              <div>
                <Link to="/traineeSoftwareDeveloper" className="viewDetailsbtn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerBody;
