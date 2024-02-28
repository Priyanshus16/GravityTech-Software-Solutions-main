import React from "react";
import "./ErpBody.css";

const ErpBody = () => {
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
        <div className="appheading">ERP Developement</div>
        <div className="erpbox mb-5">
          <div className="appuppertext">
            Most Organizations use ERP as a tool to manage various aspects of
            their businesses.
          </div>
          <div className="appuppertext" style={{paddingTop:"0", paddingBottom:"0"}}>
            We Are Highly Focused in Development Through Our Deep Research and
            Analysis In Various Aspects Of Business So That We Can Simply The
            Things As Per The Requirement in Industries Which Will Help Them To
            Manage Their Business Smoothly and Smartly. We Have Produced Many
            ERP Solutions For Better Business Management So Far and Our Team
            Continuously Working On Different ERP Projects To More Simply The
            Business Activities. We Also Make ERP Projects On The Basis Of
            Different Case-Studies. So They All Are Customizable As Per the
            Requirement of the Clients.
          </div>
          <div className="appuppertext" >
            A Portion Of Our Major ERP Projects.
          </div>
        </div>
        <div className="appheading">Our ERP Modules</div>

        <div className="cardSection">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div
                  className="erpcardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="erpcardTitle mb-3">
                      Sales & Purchase Management
                    </div>
                    <div className="erpcardPara">
                      Increase Productivity & Lower Costs By Managing Your Sales
                      & Purchased. It Manages complete cycle from Purchases to
                      Sales Order.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="erpcardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="erpcardTitle mb-3">Stock Management</div>
                    <div className="erpcardPara">
                      Systematically Manages the sourcing, storing, and selling
                      stocks—both raw materials (components) and finished goods
                      (products). So stock available in the right place, at the
                      right time with right cost price.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="erpcardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="erpcardTitle mb-3">Project Management</div>
                    <div className="erpcardPara">
                      Help in Delivered Projects on Time with great Profits in
                      Projects. It manages tasks status, Timesheet and project
                      work on time.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div
                  className="erpcardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="erpcardTitle mb-3">Accounts Management</div>
                    <div className="erpcardPara">
                      Manages all Financial transaction so real time view of
                      Cash flow. It covers all features required for Accounting
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="erpcardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="erpcardTitle mb-3">
                      Paper Work Management
                    </div>
                    <div className="erpcardPara">
                      Help in Maintain All Document required for Organization
                      with some standard Template. So reduces tedious work of
                      document management will be available on one click.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="erpcardTwo text-center pt-4 ps-3 pe-3 mb-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(135, 135, 135, 0.3)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <div className="erpcardTitle mb-3">Schedule management</div>
                    <div className="erpcardPara">
                      systematic approach of processing and completing Schedule
                      work orders in a timely manner in order to minimize asset
                      downtime
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

export default ErpBody;
