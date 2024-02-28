import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ERPDevelopment from "./pages/ERPDevelopment";
import CloudManagement from "./pages/CloudManagement";
import FrontendDeveloper from "./pages/FrontendDeveloper";
import Career from "./pages/Career";
import JobApply from "./pages/JobApply";
import FullStack from "./pages/FullStack";
import TestingEngineer from "./pages/TestingEngineer";
import DevopsEngineer from "./pages/DevopsEngineer";
import DataEntry from "./pages/DataEntry";
import TraineeSoftwareDeveloper from "./pages/TraineeSoftwareDeveloper";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
        <Route
          path="/web"
          element={<WebsiteDevelopment></WebsiteDevelopment>}
        ></Route>
        <Route path="/app" element={<AppDevelopment></AppDevelopment>}></Route>
        <Route path="/erp" element={<ERPDevelopment></ERPDevelopment>}></Route>
        <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
        <Route path="/career" element={<Career></Career>}></Route>
        <Route
          path="/cloud"
          element={<CloudManagement></CloudManagement>}
        ></Route>
        <Route
          path="/frontendDeveloper"
          element={<FrontendDeveloper></FrontendDeveloper>}
        ></Route>
        <Route path="/job-apply" element={<JobApply></JobApply>}></Route>
        <Route path="/fullStack" element={<FullStack></FullStack>}></Route>
        <Route
          path="/testingEngineer"
          element={<TestingEngineer></TestingEngineer>}
        ></Route>
        <Route
          path="/devopsEngineer"
          element={<DevopsEngineer></DevopsEngineer>}
        ></Route>
        <Route path="/dataEntry" element={<DataEntry></DataEntry>}></Route>
        <Route path="/traineeSoftwareDeveloper" element={<TraineeSoftwareDeveloper></TraineeSoftwareDeveloper>}></Route>
      </Routes>
    </div>
  );
}

export default App;
