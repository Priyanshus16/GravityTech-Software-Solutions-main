import React from "react";
import { Link } from "react-router-dom";

const DevopsBody = () => {
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
          <div className="viewdetailsheading">Devops Engineer</div>
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
                    <div className="divCardSubTitle">Devops Engineer</div>
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
                  DevOps Engineers are conversant with all the technical as well
                  as IT operations aspects for integrated operations. They are
                  expected to know about the various automation tools which may
                  be required for process automation and testing.DevOps engineer
                  with a systematic approach to understand the job function in
                  detail, and to identify the required skills and gaps for
                  further improvement.
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
                      Understanding customer requirements and project KPIs
                    </li>
                    <li>
                      Implementing various development, testing, automation
                      tools, and IT infrastructure
                    </li>
                    <li>
                      Planning the team structure, activities, and involvement
                      in project management activities.
                    </li>
                    <li>Managing stakeholders and external interfaces</li>
                    <li>Setting up tools and required infrastructure</li>
                    <li>
                      Defining and setting development, test, release, update,
                      and support processes for DevOps operation
                    </li>
                    <li>
                      Have the technical skill to review, verify, and validate
                      the software code developed in the project.
                    </li>
                    <li>
                      Troubleshooting techniques and fixing the code bugs.
                    </li>
                    <li>
                      Monitoring the processes during the entire lifecycle for
                      its adherence and updating or creating new processes for
                      improvement and minimizing the wastage
                    </li>
                    <li>
                      Encouraging and building automated processes wherever
                      possible
                    </li>
                    <li>
                      Identifying and deploying cybersecurity measures by
                      continuously performing vulnerability assessment and risk
                      management
                    </li>
                    <li>Incidence management and root cause analysis</li>
                    <li>
                      Coordination and communication within the team and with
                      customers
                    </li>
                    <li>Selecting and deploying appropriate CI/CD tools</li>
                    <li>
                      Strive for continuous improvement and build continuous
                      integration, continuous development, and constant
                      deployment pipeline (CI/CD Pipeline)
                    </li>
                    <li>Mentoring and guiding the team members.</li>
                    <li>
                      Monitoring and measuring customer experience and KPIs.
                    </li>
                    <li>
                      Managing periodic reporting on the progress to the
                      management and the customer
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
                      Proven experience.
                    </li>
                    <li>
                      DevOps engineers must have good experience in common
                      scripting languages like Perl, Java, and Python. Most of
                      the DevOps tools require some level of scripting to
                      automate things to the highest standard. For example,
                      Ansible uses a YAML scripting language for automation,
                      which is primarily based on Python.
                    </li>
                    <li>
                      YAML is used to create a complete automation workflow
                      within a configuration management tool. Scripting
                      knowledge will also help to sync better with the
                      development teams and understand their code at a high
                      level.
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

export default DevopsBody;
