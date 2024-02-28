import React from "react";
import { Link } from "react-router-dom";

const TestingEngineerBody = () => {
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
        <div className="container">
          <div className="viewdetailsheading">
            QA Engineer (Software Tester)
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="jobcard">
                <div className="jobinformation mb-3">Job Information</div>
                <div className="d-flex mb-2 align-items-center">
                  <div className="iconDiv">
                    <img src="./assets/Icon9.png" alt="img"></img>
                  </div>
                  <div>
                    <div className="divCardTitle">Employee Type:</div>
                    <div className="divCardSubTitle">Full Time</div>
                  </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <div className="iconDiv">
                    <img src="./assets/Icon10.png" alt="img"></img>
                  </div>
                  <div>
                    <div className="divCardTitle">Job Type:</div>
                    <div className="divCardSubTitle">QA Engineer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 ps-4 pe-4">
              <div className="jobdescription mb-5">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="assets/icon1.png"
                    width="24px"
                    height="24px"
                    alt="img"
                  ></img>
                  <span className="listTitle">Job Description :</span>
                </div>
                <div className="ulItem">
                  We are looking for a results-driven software tester to be
                  responsible for designing and running tests on software
                  usability. The software tester will conduct tests, analyze the
                  results, and report observations to the design team. You may
                  also interact with clients in order to understand the
                  requirements of the product. <br></br>
                  To be successful as a software tester, you should have a
                  working knowledge of software and test design, the capability
                  to run through tests, and the ability to analyze the results.
                  Ultimately, the software tester should be result-driven, have
                  good communication skills, and up-to-date knowledge of
                  software programming and software test design.
                </div>
              </div>
              <div className="resposibilities mb-5">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="assets/icon6.png"
                    width="24px"
                    height="24px"
                    alt="img"
                  ></img>
                  <span className="listTitle">
                    Responsibilities and Duties:
                  </span>
                </div>
                <div>
                  <ul className="ulItem">
                    <li>
                      Review business / software requirements and provide
                      inputs.
                    </li>
                    <li>Prepare test cases, test scripts and test data.</li>
                    <li>Execute tests (manual / automated).</li>
                    <li>Report defects and assist in their understanding.</li>
                    <li>
                      Analyze test results and track software testing metrics.
                    </li>
                    <li>
                      A Software Tester is responsible for designing testing
                      scenarios for usability testing
                    </li>
                    <li>
                      He is responsible for conducting the testing, thereafter
                      analyze the results and then submit his observations to
                      the development team.
                    </li>
                    <li>
                      He may have to interact with the clients to better
                      understand the product requirements or in case the design
                      requires any kind of modifications.
                    </li>
                    <li>
                      Software Testers are often responsible for creating
                      test-product documentation and also has to participate in
                      testing related walk through.
                    </li>
                    <li>
                    	Prepare and present test reports.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="qualifications mb-5">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="assets/icon7.png"
                    width="24px"
                    height="24px"
                    alt="img"
                  ></img>
                  <span className="listTitle">Required Qualifications:</span>
                </div>
                <div>
                  <ul className="ulItem">
                    <li>
                      Any Bachelor's degree or PG in any Specialization with Proven experience. 
                    </li>
                    <li>
                    	1+ years of relevant work experience
                    </li>
                    <li>
                      	Knowledge of at least one programming/ scripting language
                    </li>
                    <li>
                      Knowledge of at least one database management system
                    </li>
                    <li>
                       Proficiency in written and spoken English
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Link to="/job-apply" className="applyNowBtn">
          Apply Now
        </Link>
      </div>
    </>
  );
};

export default TestingEngineerBody;
