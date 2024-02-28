import React from "react";
import { Link } from "react-router-dom";

const DataEntryBody = () => {
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
          <div className="viewdetailsheading">Data Entry</div>
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
                    <div className="divCardSubTitle">Data Entry</div>
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
                  Data analysts are responsible for gathering, analyzing and
                  interpreting large sets of data. They need to have a good
                  understanding of statistics and information systems, as well
                  as the ability to effectively communicate their findings.
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
                      Develop and implement data-driven solutions to optimize
                      organizational processes and operations
                    </li>
                    <li>
                      Collect, interpret, and analyze large quantities of data
                      from a variety of sources
                    </li>
                    <li>
                      Utilize data analysis tools to create meaningful reports
                    </li>
                    <li>Monitor and report on key performance indicators</li>
                    <li>
                      Work with stakeholders to identify areas of improvement
                      and develop solutions
                    </li>
                    <li>
                      Create and maintain documentation of data processes, data
                      flow, and procedures
                    </li>
                    <li>
                      Generate ad-hoc reports to meet specific business needs
                    </li>
                    <li> Provide guidance on data-driven decision-making.</li>
                    <li>
                      Using automated tools to extract data from primary and
                      secondary sources
                    </li>
                    <li>
                      Removing corrupted data and fixing coding errors and
                      related problems.
                    </li>
                    <li>
                      Developing and maintaining databases, and data systems –
                      reorganizing data in a readable format.
                    </li>
                    <li>
                      Performing analysis to assess the quality and meaning of
                      data.
                    </li>
                    <li>
                      Filter Data by reviewing reports and performance
                      indicators to identify and correct code problems.
                    </li>
                    <li>
                      Using statistical tools to identify, analyze, and
                      interpret patterns and trends in complex data sets could
                      be helpful for the diagnosis and prediction.
                    </li>
                    <li>
                      Assigning numerical value to essential business functions
                      so that business performance can be assessed and compared
                      over periods of time.
                    </li>
                    <li>
                      Analyzing local, national, and global trends that impact
                      both the organization and the industry
                    </li>
                    <li>
                      Preparing reports for the management stating trends,
                      patterns, and predictions using relevant data.
                    </li>
                    <li>
                      Working with programmers, engineers, and management heads
                      to identify process improvement opportunities, propose
                      system modifications, and devise data governance
                      strategies.
                    </li>
                    <li>
                      Preparing final analysis reports for the stakeholders to
                      understand the data-analysis steps, enabling them to take
                      important decisions based on various facts and trends.
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
                      Advanced knowledge of statistics, data analysis, and
                      predictive modelling.
                    </li>
                    <li>
                      Proficiency in software such as SQL, Python, SAS, R,
                      Tableau, Power BI, and Excel.
                    </li>
                    <li>
                      Ability to work independently and as part of a team.
                    </li>
                    <li>Excellent communication and presentation skills.</li>
                    <li>
                      Knowledge of industry best practices in data storage and
                      security.
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

export default DataEntryBody;
