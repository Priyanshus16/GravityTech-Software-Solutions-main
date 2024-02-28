import React from "react";
import Form from "../shared/Form";
import "./HomeBody.css";

const HomeBody = () => {
  return (
    <>
      <div className="container homeBody">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 text-center mb-3">
            <h1 className="bodyTitle">
              TURNING GREAT <br /> IDEAS INTO USER HAPPY PRODUCTS
            </h1>
            <span className="bodySubtitle">
              with our award wining Mobile & Web Development Team
            </span>
            <div className="text-center mt-4 mb-3">
              <button
                className="btn"
                style={{ background: "#0E0E0E", color: "white" }}
              >
                Know More
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 text-center mb-3">
            <img src="./assets/img1.png" alt="img" className="img-fluid"></img>
          </div>
        </div>
      </div>
      <div className="divTwo">
        <div className="container p-2">
          <div className="divTwoPhoneTitle">
            Top Rated Web Development Company Fueling Innovation
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 text-center mb-3">
              <img src="./assets/image2.png" alt="img" className="img-fluid"></img>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 text-center mb-3 p-3">
              <div className="divTwoTitle">
                Top Rated Web Development
                <br /> Company Fueling Innovation
              </div>
              <div className="divTwoSubtitle">
                We proactively consult, design, create, and scale solid online,
                mobile, and custom software solutions that foster creativity and
                bring about digital success!
              </div>
              <div className="divTwoParagraph">
                we believe that every project is an important milestone in our
                journey. Hence, we position ourselves as a custom web
                development company specializing in developing impactful digital
                solutions
              </div>
              <div>
                <button className="seeMoreBtn">See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardSection">
        <div className="container text-center">
          <div className="cardSectionTitle">OUR SERVICE</div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="cardOne text-center mb-4"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.31)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="pt-3">
                  <img src="./assets/image4.png" alt="img"></img>
                </div>
                <div className="card-body">
                  <div className="cardTitle mb-3">Web Development</div>
                  <div className="cardPara">
                    Our team of skilled web developers, together with
                    industry-best project governance, ensures top-level web
                    development solutions across industries for businesses
                    across the world, including extremely robust SaaS platforms,
                    company portals, eCommerce solutions, and content management
                    systems.
                  </div>
                  <div className="knowMore mb-3">Know More &gt;</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="cardOne text-center mb-4"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.31)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="pt-3">
                  <img src="./assets/image5.png" alt="img"></img>
                </div>
                <div className="card-body">
                  <div className="cardTitle mb-3">Mobile App Development</div>
                  <div className="cardPara">
                    We create popular mobile applications that users adore.
                    utilising the advantages of AI, ML, IoT, and other
                    cutting-edge technologies to produce a magnificent software
                    that endures
                  </div>
                  <div className="knowMore mb-3">Know More &gt;</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="cardOne text-center mb-4"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.31)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="pt-3">
                  <img src="./assets/image6.png" alt="img"></img>
                </div>
                <div className="card-body">
                  <div className="cardTitle mb-3">ERP Development</div>
                  <div className="cardPara">
                    We Are Highly Focused in Development Through Our Deep
                    Research and Analysis In Various Aspects Of Business So That
                    We Can Simply The Things As Per The Requirement in
                    Industries Which Will Help Them To Manage Their Business
                    Smoothly and Smartly
                  </div>
                  <div className="knowMore mb-3">Know More &gt;</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="cardOne text-center mb-4"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.31)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="pt-3">
                  <img src="./assets/image7.png" alt="img"></img>
                </div>
                <div className="card-body">
                  <div className="cardTitle mb-3">Cloud Management</div>
                  <div className="cardPara">
                    We analyze & understand your current IT environment and
                    assess the cloud readiness of your business applications.
                    Help you identify the right public cloud & services for your
                    applications to help you minimize your cost and efforts to
                    run your business applications.
                  </div>
                  <div className="knowMore mb-3">Know More &gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardSection">
        <div className="container text-center">
          <div className="cardSectionTitle">OUR Process</div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div
                className="homecardTwo text-center pt-4 ps-3 pe-3 mb-4"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(135, 135, 135, 0.3)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                }}
              >
                <div className="pt-3 mb-3">
                  <img src="./assets/image8.png" alt="img"></img>
                </div>
                <div className="card-body">
                  <div className="cardTwoTitle mb-3">Web Development</div>
                  <div className="cardTwoPara">
                    Planning to delivery we determine the Goal, and define Brand
                    to locate the target audience. Analyzing your Competitors.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="homecardTwo text-center pt-4 ps-3 pe-3 mb-4"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(135, 135, 135, 0.3)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                }}
              >
                <div className="pt-3 mb-3">
                  <img src="./assets/image9.png" alt="img"></img>
                </div>
                <div className="card-body">
                  <div className="cardTwoTitle mb-3">Design</div>
                  <div className="cardTwoPara">
                    It encompasses several different aspects, including webpage
                    layout, content production, and graphic design.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="homecardTwo text-center pt-4 ps-3 pe-3 mb-4"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(135, 135, 135, 0.3)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                }}
              >
                <div className="pt-3 mb-3">
                  <img src="./assets/image10.png" alt="img"></img>
                </div>
                <div className="card-body">
                  <div className="cardTwoTitle mb-3">Development</div>
                  <div className="cardTwoPara">
                    Developing from web apps to mobile apps, cloud-based or
                    cross-platform desktop solutions.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="homecardTwo text-center pt-4 ps-3 pe-3 mb-4"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(135, 135, 135, 0.3)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                }}
              >
                <div className="pt-3 mb-3">
                  <img src="./assets/image11.png" alt="img"></img>
                </div>
                <div className="card-body">
                  <div className="cardTwoTitle mb-3">Test</div>
                  <div className="cardTwoPara">
                    Ensuring appropriate testing for all the web and mobile
                    based system before going live, We address required issues
                    before the system is live for public.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="homecardTwo text-center pt-4 ps-3 pe-3 mb-4"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(135, 135, 135, 0.3)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                }}
              >
                <div className="pt-3 mb-3">
                  <img src="./assets/image12.png" alt="img"></img>
                </div>
                <div className="card-body">
                  <div className="cardTwoTitle mb-3">Launch</div>
                  <div className="cardTwoPara">
                    Once your system is ready, we create required marketing
                    aspects to attack your potential leads, understanding your
                    competitors and your business goal
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="homecardTwo text-center pt-4 ps-3 pe-3 mb-4"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(135, 135, 135, 0.3)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                }}
              >
                <div className="pt-3 mb-3">
                  <img src="./assets/image13.png" alt="img"></img>
                </div>
                <div className="card-body">
                  <div className="cardTwoTitle mb-3">Support</div>
                  <div className="cardTwoPara text-center">
                    After the launch, we provide support .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="formContainer text-center">
        <Form></Form>
      </div>
    </>
  );
};

export default HomeBody;
