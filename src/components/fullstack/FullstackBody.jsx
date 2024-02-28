import React from "react";
import { Link } from "react-router-dom";

const FullstackBody = () => {
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
          <div className="viewdetailsheading">Full Stack Developer</div>
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
                    <div className="divCardSubTitle">Full Stack Developer</div>
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
                  We are looking for a highly skilled computer programmer who is
                  comfortable with both front and back end programming. Full
                  stack developers are responsible for developing and designing
                  front end web architecture, ensuring the responsiveness of
                  applications, and working alongside graphic designers for web
                  design features, among other duties. Full stack developers
                  will be required to see out a project from conception to final
                  product, requiring good organizational skills and attention to
                  detail.
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
                      Collaborate with development teams and product managers to
                      create innovative software solutions.{" "}
                    </li>
                    <li>
                      Keeping up with the latest advancements in programming
                      languages and server apps.
                    </li>
                    <li>
                      Create new, dynamic, front-end, and backend software
                      products and apps that are dynamic and visually appealing
                    </li>
                    <li>
                      Able to develop entire architecture, responsive design,
                      user interaction, and user experience.
                    </li>
                    <li>
                      The ability to use databases, proxies, APIs, version
                      control systems, and third-party applications
                    </li>
                    <li>
                      Offer suggestions for ongoing improvement, and add or
                      remove features as necessary.
                    </li>
                    <li>
                      Design a plan for stability, scalability, performance
                      optimization, and ongoing improvement.
                    </li>
                    <li>
                      Keep track of new development-related tools, frameworks,
                      methods, and architectures.
                    </li>
                    <li>
                      The developer is in charge of creating APIs depending on
                      the architecture of the production application.
                    </li>
                    <li>
                      All operating systems, including Windows, macOS, and
                      Linux, must support applications without issues.{" "}
                    </li>
                    <li>
                      GitHub and Git: Everyone who is a developer or who aspires
                      to be one has heard of Git. It is an "open-source
                      distributed version control system" that can accommodate
                      your development needs. Developers can simply track all
                      changes made to programs and apps, codes, websites,
                      papers, and other related materials using Git.
                      Professional developers typically have GitHub profiles,
                      which are required if they are part of a team.{" "}
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
                      Any Bachelor's degree or PG in any Specialization with
                      Proven experience
                    </li>
                    <li>
                      Strong organizational and project management skills.
                    </li>
                    <li>
                      Proficiency with fundamental front-end languages such as
                      HTML, CSS, and JavaScript.
                    </li>
                    <li>
                      {" "}
                      Familiarity with JavaScript frameworks such as Angular JS,
                      React, and Amber.
                    </li>
                    <li>
                      Proficiency with server-side languages such as Python,
                      Ruby, Java, PHP, and .Net.
                    </li>
                    <li>
                      Familiarity with database technology such as MySQL,
                      Oracle, and MongoDB.
                    </li>
                    <li>Excellent verbal communication skills.</li>
                    <li>Good problem-solving skills.</li>
                    <li>Attention to detail.</li>
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

export default FullstackBody;
