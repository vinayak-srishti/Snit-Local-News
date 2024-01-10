import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
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
import Readereditprofile from "./Reader/Readereditprofile";
import AdminLogin from "./Admin/AdminLogin";
import Adminlognav from "./Admin/Adminlognav";
import Adminsidebar from "./Admin/Adminsidebar";
import Adminviewuser from "./Admin/Adminviewuser";
import Adminhome from "./Admin/Adminhome";
import Adminviewsingleuser from "./Admin/Adminviewsingleuser";
import Footer from "./Reader/Footer";
import Readerprivicay from "./Reader/Readerprivicay";
import Readreabout from "./Reader/Readreabout";
import Readersports from "./Reader/Readersports";
import Admindashboard from "./Admin/Admindashboard";
import Contributercarousle from "./Contributor/Contributercarousle";
import Contributertrendingtopics from "./Contributor/Contributertrendingtopics";
import Contributersidebar from "./Contributor/Contributersidebar";
import Contributerviewprofile from "./Contributor/Contributerviewprofile";
import Contributerprofile from "./Contributor/Contributerprofile";

function App() {
  //local
  const url = "http://localhost:4004";

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Readrer */}
          <Route path="/" element={[<Readernav />, <Readerhomecarousle />, <Readerhome />]} />
          <Route path="/readersignin" element={[<Readernavonlogin />, <Readersignin />]} />
          <Route path="/readerlogin" element={[<Readernavonlogin />, <ReaderLogin />]} />
          <Route path="/readernav" element={<Readernav />} />
          <Route path="/readerforgetpswd" element={[<Readernavonlogin />, <Readerforgetpswd />]} />
          <Route path="/readerhome" element={[<Readernav />, <Readerhomecarousle />, <Readerhome />,<Footer/>]} />
          <Route path="/readercarousle" element={<Readerhomecarousle />} />
          <Route path="/readerpolitics" element={[<Readernavafterlogin/>,<Readerpoliticspage />,<Footer/>]} />
          <Route path="/readersports" element={[<Readernavafterlogin/>,<Readersports/>,<Footer/>]}/>
          <Route path="/readernavafter" element={<Readernavafterlogin />} />
          <Route path="/readernavonlogin" element={<Readernavonlogin />} />
          <Route path="/readerhomelogin" element={[<Readernavafterlogin />, <Readerhomecarousle />, <Readerhome />,<Footer/>]} />
          <Route path="/readersidebar" element={<Readerprofilesidebar />} />
          <Route path="/footer" element={<Footer/>}/>
          
          {/* <Route path="/readerprofile_accountinfo" element={<Readerprofileaccountinfo/>}/> */}

          <Route path="/readerprofile_accountinfo" element={[<Readernavafterlogin />, <Readerprofile data='account' />,<Footer/>]} />
          <Route path="/reader_pageroles" element={[<Readernavafterlogin />, <Readerprofile data='pagerole' />,<Footer/>]} />
          <Route path="/reader_editprofile" element={[<Readernavafterlogin />, <Readerprofile data='editprofile' />,<Footer/>]} />
          <Route path="/reader_privacy" element={[<Readernavafterlogin/>,<Readerprofile data='readerprivacy'/>,<Footer/>]}/>
          <Route path="/reader_about" element={[<Readernavafterlogin/>,<Readerprofile data='readerabout'/>,<Footer/>]}/>

          { /*Contributor*/}
          <Route path="/contributorsignup" element={<Contributorsignup />} />
          <Route path="/contributerlogin" element={<ContributorLogin />} />
          <Route path="/contributerforgetpswd" element={<Contributorforgetpswd />} />
          <Route path="/contributernavbar" element={<Contributernavbar />} />
          <Route path="/contributer_carousel" element={<Contributercarousle/>}/>
          <Route path="/contributer_trendingtopics" element={<Contributertrendingtopics/>}/>
          <Route path="/contributer_home" element={[<Contributernavbar />,<Contributercarousle/>,<Contributertrendingtopics/>,<Footer/>]}/>
          <Route path="/contributer_sidebar" element={<Contributersidebar/>}/>
          <Route path="/contributer_viewprofile" element={[<Contributernavbar />,<Contributerprofile data='contributerviewprofile'/>,<Footer/>]}/>

          {/* Advertiser */}
          <Route path="/advertisersignin" element={<Advertisersignin />} />
          <Route path="/advertiserlogin" element={[<Advertiserloginnav />, <AdvertiserLogin />]} />
          <Route path="/advertiserloginnav" element={<Advertiserloginnav />} />
          <Route path="/advertiserforgetpswd" element={[<Advertiserloginnav />, <Advertiserforgetpswd />]} />


          {/* Admin */}
          <Route path="/admin-loginnav" element={<Adminlognav/>}/>
          <Route path="/admin" element={[<Adminlognav/>,<AdminLogin/>]}/>
          <Route path="/admin_sidebar" element={[<Adminlognav/>,<Adminsidebar/>]}/>
          <Route path="/admin_viewuser" element={[<Adminlognav/>,<Adminhome data="viewuser"/>]}/>
          <Route path="/admin_viewsingleuser/:id" element={[<Adminlognav/>,<Adminhome data="viewsingleuser"/>]}/>
          <Route path="/admin_dashboard" element={[<Adminlognav/>,<Admindashboard/>]}/>



          {/* 
              <Route path="/oneone" element={<HomePage/>}/>
              <Route path="/nav" element={<Navbar/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
