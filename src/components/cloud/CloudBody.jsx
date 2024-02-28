import React from "react";
import "./CloudBody.css";

const CloudBody = () => {
  return (
    <>
      <div className="container homeBody">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12  mb-3">
            <h1 className="bodyTitle">
              Take complex applications simple for users
            </h1>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 text-center mb-3">
            <img src="./assets/img3.png" alt="img" className="img-fluid"></img>
          </div>
        </div>
        <div className="appheading">Cloud Management</div>
        <div className="erpbox mb-5">
          <div className="appuppertext">
            We enable you to get your business up and running in the cloud
          </div>

          <div className="applowertext" style={{paddingTop:"0"}}>
            We analyze & understand your current IT environment and assess the
            cloud readiness of your business applications. Help you identify the
            right public cloud & services for your applications to help you
            minimize your cost and efforts to run your business applications. We
            also help you to design, build and manage Azure solutions that are
            customized for your business.
          </div>
        </div>
        <div className="appheading">Our Cloud Management Modules</div>

        <div className="cardSection" style={{ paddingTop: "20px" }}>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div
                  className="cardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="cloudcardTitle mb-3">Migration</div>
                    <div className="cloudcardPara">
                      Whether your application is on premise or any other public
                      cloud. Move to Azure for FREE without any hiccups
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="cardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="cloudcardTitle mb-3">Design Support</div>
                    <div className="cloudcardPara">
                      Worried what to use? Our experts help you with the best
                      design for your workloads
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="cardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="cloudcardTitle mb-3">
                      Resource Optimization
                    </div>
                    <div className="cloudcardPara">
                      We help you pick the right tools in azure to optimize cost
                      and performance.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div
                  className="cardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="cloudcardTitle mb-3">Managed Services</div>
                    <div className="cloudcardPara">
                      Better manage your workloads with complete Access of
                      Microsoft Azure Console.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="cardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="cloudcardTitle mb-3">Automation</div>
                    <div className="cloudcardPara">
                      Get the mundane out of your work. Get FREE consultation on
                      how to leverage Azure Automation services.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="cardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="cloudcardTitle mb-3">
                      Monitoring Services
                    </div>
                    <div className="cloudcardPara">
                      Essential pillar for business continuity is monitoring. We
                      help you get the right insights with Microsoft Operations
                      Management Suite.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudBody;
