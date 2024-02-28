import React from "react";
import "./AppBody.css";
const AppBody = () => {
  return (
    <>
      <div className="container homeBody">
        <div className="d-flex align-items-center mb-4">
          <span className="line"></span>
          <span className="companies">Trust by 100+ of Companies</span>
        </div>
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
        <div className="appheading">App Developement</div>
        <div className="appbox mt-5 mb-5">
          <div className="appuppertext">
            We give the best UI for portable applications. Our Android App
            improvement administrations are a steady represent both for the old
            and the new form. Our application engineers guarantee better
            steadiness and usefulness to your business by planning applications
            in a state of harmony with your plan of action. We plan portable
            applications for the Ideas that you have as your business
            arrangements.
          </div>
          <div className="applowertext">
            We carry an abundance of experience identified with Android App
            Development. An Android App includes complex elements and requires
            the mastery of Android App Developers and instruments to build up a
            Quality Application. Android App Design Ultimate Design and client
            experience can make your application stand top in the market
            rivalry. Our Android application engineers guarantee magnificent
            plans to suit your thoughts.
          </div>
        </div>
        <div className="appservices mt-5 mb-5">
          Our App Development Services
        </div>
      </div>
      <div className="container-fluid servicesbox">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ padding: "5%" }}
        >
          <div className="col-lg-5 col-md-5 col-sm-12 text-center">
            <div className="imgContainer">
              <img src="./assets/AndroidApp.png" alt="img" className="img-fluid"></img>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="Apptext">ANDROID APPLICATION DEVELOPMENT</div>
            <div className="Appsubtext">
              Build better apps fromstart to finish. Set yourself up for success
              by measuring the full value of your app across all key features.We
              have an expert team of mobile app development professionals
              specializing in Android app design and development.
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid servicesbox">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ padding: "5%" }}
        >
          <div className="col-lg-5 col-md-5 col-sm-12 text-center">
            <div className="imgContainer">
              <img src="./assets/ApplePhone.png" alt="img" className="img-fluid"></img>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 ">
            <div className="Apptext ">IPHONE / IOS APPLICATION DEVELOPMENT</div>
            <div className="Appsubtext">
              We have an expert team of iPhone/iOS and Swift app developers, we
              assist selecting right client architecture amongst “Mobile Web
              App”, “Native App”, “Hybrid App” approaches considering several
              unique aspects like device form factor, sporadic connectivity,
              variable bandwidth, multi-platform support and user experience.
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid servicesbox">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ padding: "5%" }}
        >
          <div className="col-lg-5 col-md-5 col-sm-12 text-center">
            <div className="imgContainer">
              <img src="./assets/Watch.png" alt="img" className="img-fluid"></img>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 ">
            <div className="Apptext text-center">
              WEARABLE DEVICES APPLICATION DEVELOPMENT
            </div>
            <div className="Appsubtext">
              We are helping businesses find a greater audience with the power
              of wearable’s to change the way users communicates and make
              decisions together.Our expert wearable app development solutions
              team can take your wearable app idea to the next level.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBody;
