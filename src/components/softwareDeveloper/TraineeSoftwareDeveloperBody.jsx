import React from "react";
import { Link } from "react-router-dom";

const TraineeSoftwareDeveloperBody = () => {
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
          <div className="viewdetailsheading">Trainee Software Developer</div>
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
                    <div className="divCardSubTitle">
                      Trainee Software Developer
                    </div>
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
                  This role is suitable for a bright and ambitious individual
                  who is looking to develop their software engineering skills in
                  a fast-paced environment. The successful applicant will be
                  responsible for developing software applications, improving
                  existing applications, and providing technical support and
                  advice. The position will involve working closely with the
                  other software engineers, software architects, and product
                  owners to ensure the development of quality applications.
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
                      Developing and maintaining software applications using
                      standard programming languages such as Java, C++, or
                      Python
                    </li>
                    <li>
                      Writing, debugging, and maintaining code for projects
                    </li>
                    <li>Identifying and resolving software defects</li>
                    <li>
                      Ensuring software meets industry standards and
                      requirements
                    </li>
                    <li>
                      Creating unit tests to ensure code works as expected
                    </li>
                    <li>
                      Working closely with a team of software engineers and
                      other professionals
                    </li>
                    <li>Participating in design, code, and test reviews</li>
                    <li>Documenting software development processes</li>
                    <li>
                      Keeping up to date with the latest industry trends and
                      technologies
                    </li>
                    <li>
                      Performing maintenance and upgrades on existing software
                      applications
                    </li>
                    <li>
                      Working with customers to troubleshoot and address
                      software issues
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
                    <li>Any Bachelor's degree or PG in any Specialization.</li>
                    <li>
                      As a trainee software developer, you need to have a basic
                      understanding of software development principles,
                      languages, and tools.
                    </li>
                    <li>
                      You should be familiar with systems programming and
                      object-oriented programming languages, such as Java, C++,
                      and Python.
                    </li>
                    <li>
                      You should also understand how to use databases, as well
                      as web development and mobile development tools such as
                      Android and iOS SDKs.
                    </li>
                    <li>
                      you should have a strong knowledge of various computer
                      algorithms and data structures, problem-solving
                      strategies, and debugging techniques.
                    </li>
                    <li>
                      Additionally, you should be able to work with a team, and
                      be able to communicate effectively with stakeholders and
                      other developers in order to successfully complete a
                      project.
                    </li>
                    <li>
                      You should also have a basic understanding of software
                      engineering principles, such as software architecture,
                      system design, and software testing.
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

export default TraineeSoftwareDeveloperBody;
