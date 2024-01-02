import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Readersignin from "./Reader/Readersignin";
import ReaderLogin from "./Reader/ReaderLogin";
import Readernav from "./Reader/Readernav";
import Readerforgetpswd from "./Reader/Readerforgetpswd";
import Readerhome from "./Reader/Readerhome";
import Readerhomecarousle from "./Reader/Readerhomecarousle";
import Contributorsignup from "./Contributor/Contributorsignup";
import ContributorLogin from "./Contributor/ContributorLogin";
import Contributorforgetpswd from "./Contributor/Contributorforgetpswd";
import Contributernavbar from "./Contributor/Contributernavbar";
import Navbar from "./Reader/Navbar";
import HomePage from "./Reader/Homepage";
import Readerpoliticspage from "./Reader/Readerpoliticspage";
import Readernavafterlogin from "./Reader/Readernavafterlogin";
import Advertisersignin from "./Advertiser/Advertisersignin";
import AdvertiserLogin from "./Advertiser/AdvertiserLogin";
import Advertiserloginnav from "./Advertiser/Advertiserloginnav"
import Advertiserforgetpswd from "./Advertiser/Advertiserforgetpswd";
import Readernavonlogin from "./Reader/Readernavonlogin";
import Readerprofilesidebar from "./Reader/Readerprofilesidebar";
import Readerprofileaccountinfo from "./Reader/Readerprofileaccountinfo";
import Readerprofile from "./Reader/Readerprofile";
import Readerpageroles from "./Reader/Readerpageroles";

function App() {
  //local
  const url = "http://localhost:4004";

  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={[<Readernav/>,<Readerhomecarousle/>,<Readerhome/>]}/>

          <Route path="/readersignin"  element={[<Readernavonlogin/>,<Readersignin/>]}/>
          <Route path="/readerlogin"  element={[<Readernavonlogin/>,<ReaderLogin/>]}/>
          <Route path="/readernav" element={<Readernav/>}/>
          <Route path="/readerforgetpswd" element={[<Readernavonlogin/>,<Readerforgetpswd/>]}/>
          <Route path="/readerhome" element={[<Readernav/>,<Readerhomecarousle/>,<Readerhome/>]}/>
          <Route path="/readercarousle" element={<Readerhomecarousle/>}/>
          <Route path="/readerpolitics" element={<Readerpoliticspage/>}/>
          <Route path="/readernavafter" element={<Readernavafterlogin/>}/>
          <Route path="/readernavonlogin" element={<Readernavonlogin/>}/>
          <Route path="/readerhomelogin" element={[<Readernavafterlogin/>,<Readerhomecarousle/>,<Readerhome/>]}/>
          <Route path="/readersidebar" element={<Readerprofilesidebar/>}/>
          {/* <Route path="/readerprofile_accountinfo" element={<Readerprofileaccountinfo/>}/> */}

          <Route path="/readerprofile_accountinfo" element={[<Readernavafterlogin/>,<Readerprofile data='account'/>]}/>
          <Route path="/reader_pageroles" element={[<Readernavafterlogin/>,<Readerprofile data='pagerole'/>]}/>


              <Route path="/contributorsignup" element={<Contributorsignup/>}/>
              <Route path="/contributerlogin" element={<ContributorLogin/>}/>
              <Route path="/contributerforgetpswd" element={<Contributorforgetpswd/>}/>
              <Route path="/contributernavbar" element={<Contributernavbar/>}/>


          <Route path="/advertisersignin" element={<Advertisersignin/>}/>    
          <Route path="/advertiserlogin" element={[<Advertiserloginnav/>,<AdvertiserLogin/>]}/>
          <Route path="/advertiserloginnav" element={<Advertiserloginnav/>}/>
          <Route path="/advertiserforgetpswd" element={[<Advertiserloginnav/>,<Advertiserforgetpswd/>]}/>




              <Route path="/oneone" element={<HomePage/>}/>
              <Route path="/nav" element={<Navbar/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
