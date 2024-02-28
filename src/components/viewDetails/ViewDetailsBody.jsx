import React from "react";
import { Link } from "react-router-dom";
import "./ViewDetailsBody.css";

const ViewDetailsBody = () => {
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
          <div className="viewdetailsheading">Frontend Developer</div>
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
                    <div className="divCardSubTitle">Frontend Developer</div>
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
                  We are seeking a front-end web developer to join our team. As
                  a front-end developer, you will be responsible for the user
                  interface of our website. Qualified candidates will be
                  expected to have a working knowledge of HTML5, CSS, and
                  JavaScript and a basic understanding of user interface and
                  user experience (UI/UX) design. Your duties will include
                  turning wireframes and mock-ups into reusable code and
                  building high-quality UI components with scalability in mind.
                  You will also be responsible for implementing new features to
                  our WordPress website, handling the integration of plugins
                  such as WooCommerce, and performing routine maintenance and
                  performance optimizations.
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
                      Use a variety of programming languages in order to create
                      user-friendly web pages
                    </li>
                    <li>Maintain and improve company website</li>
                    <li>
                      Work in multidisciplinary team with other professionals
                      such as back-end developers and web designers
                    </li>
                    <li>
                      Writing tested, idiomatic, and documented JavaScript, HTML
                      and CSS
                    </li>
                    <li>
                      Build high-quality mock-ups and design different
                      prototypes
                    </li>
                    <li>Provide high-quality graphics and visual elements</li>
                    <li>Optimize our web applications for maximum speed</li>
                    <li> Design mobile-based features.</li>
                    <li>Always stay consistent with our brand guidelines</li>
                    <li>Get feedback from users and customers.</li>
                    <li>Make suggestions for better solutions to problems.</li>
                    <li>Keep abreast of latest and emerging technologies.</li>
                    <li> Attend training and educations.</li>
                    <li>
                      Debug errors, troubleshoot issues, and perform routine
                      performance optimizations.
                    </li>
                    <li>On-site search engine optimization (SEO).</li>
                    <li>Write high-quality, scalable, and reusable code</li>
                    <li>
                      Stay plugged into emerging technologies and industry
                      trends.
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
                      Minimum of 2 years of experience developing modern,
                      responsive, and cross-browser-compatible websites using
                      HTML, CSS, and JavaScript
                    </li>
                    <li>
                      Knowledge of JavaScript frameworks such as React, Angular,
                      and Vue
                    </li>
                    <li>
                      {" "}
                      Experience with JavaScript libraries such as jQuery and
                      Bootstrap
                    </li>
                    <li>
                      Proficiency with HTML5, including semantic HTML5 elements,
                      microformats.
                    </li>
                    <li>
                      Familiarity with CSS pre-processors such as Sass, Less, or
                      Stylus
                    </li>
                    <li>Working knowledge of SEO principles</li>
                    <li>
                      Experience with build tools such as Grunt, Gulp, or
                      Webpack
                    </li>
                    <li>Basic proficiency with Photoshop and web design</li>
                    <li>
                      Experience with cross-browser compatibility testing.
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

export default ViewDetailsBody;
