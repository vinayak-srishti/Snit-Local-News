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
import Contributeraddnews from "./Contributor/Contributeraddnews";
import Adminviewadvertiser from "./Admin/Adminviewadvertiser";
import Advertiserrequest from "./Admin/Advertiserrequest";
import Adminviewsingleadvertiser from "./Admin/Adminviewsingleadvertiser";
import Adminviewcontributer from "./Admin/Adminviewcontributer";
import Adminviewsinglecontributer from "./Admin/Adminviewsinglecontributer";
import Readerhome3 from "./Reader/Readerhome3";
import Contributereditprofile from "./Contributor/Contributereditprofile";
import Advertisersidebar from "./Advertiser/Advertisersidebar";
import Advertisermain from "./Advertiser/Advertisermain";
import Advertiserupload from "./Advertiser/Advertiserupload";
import Moderatorsidebar from "./Moderator/Moderatorsidebar";
import Moderatormain from "./Moderator/Moderatormain";
import Moderatorrequest from "./Moderator/Moderatorrequest";
import Moderatorsinglerequest from "./Moderator/Moderatorsinglerequest";
import Others from "./Reader/Others";
import Readerviewonenews from "./Reader/Readerviewonenews";
import Menu from "./Reader/Menu";
import Politicsviewone from "./Reader/Politicsviewone";
import Allnewsviewone from "./Reader/Allnewsviewone";
import ModeratorLogin from "./Moderator/ModeratorLogin";

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
          <Route path="/reader_home3" element={<Readerhome3/>}/>
          <Route path="/readerforgetpswd" element={[<Readernavonlogin />, <Readerforgetpswd />]} />
          <Route path="/readerhome" element={[<Readernav />, <Readerhomecarousle />, <Readerhome />,<Footer/>]} />
          <Route path="/readercarousle" element={<Readerhomecarousle />} />
          <Route path="/readerpolitics" element={[<Readernavafterlogin/>,<Readerpoliticspage />,<Footer/>]} />
          <Route path="/readersports" element={[<Readernavafterlogin/>,<Readersports url={url}/>,<Footer/>]}/>
          <Route path="/readernavafter" element={<Readernavafterlogin />} />
          <Route path="/readernavonlogin" element={<Readernavonlogin />} />
          <Route path="/readerhomelogin" element={[<Readernavafterlogin />, <Readerhomecarousle />, <Readerhome />,<Footer/>]} />
          <Route path="/readersidebar" element={<Readerprofilesidebar />} />
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/others" element={[<Readernavafterlogin />,<Others url={url}/>,<Footer/>]}/>
          <Route path="/viewonenewssports/:id" element={[<Readernavafterlogin/>,<Readerviewonenews/>,<Footer/>]}/>
          <Route path="/viewonepolitics/:id" element={[<Readernavafterlogin/>,<Politicsviewone/>,<Footer/>]}/>
          <Route path="/viewallnewsbyid/:id" element={[<Readernavafterlogin/>,<Allnewsviewone/>,<Footer/>]}/>
          <Route path="/menu" element={<Menu/>}/>
          
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
          <Route path="/contributer_editprofile" element={[<Contributernavbar />,<Contributerprofile data='contributereditprofile'/>,<Footer/>]}/>

          <Route path="/contributer_addnews" element={[<Contributernavbar />,<Contributeraddnews/>,<Footer/>]}/>

          {/* Advertiser */}
          <Route path="/advertisersignin" element={<Advertisersignin />} />
          <Route path="/advertiserlogin" element={[<Advertiserloginnav />, <AdvertiserLogin />]} />
          <Route path="/advertiserloginnav" element={<Advertiserloginnav />} />
          <Route path="/advertiserforgetpswd" element={[<Advertiserloginnav />, <Advertiserforgetpswd />]} />
          <Route path="/advertiser_sidebar" element={[<Advertiserloginnav/>,<Advertisersidebar/>,<Footer/>]}/>
          <Route path="/advertiser_viewuploads" element={[<Advertiserloginnav/>,<Advertisermain data="viewpro"/>,<Footer/>]}/>
          <Route path="/advertiser_viewaccount" element={[<Advertiserloginnav/>,<Advertisermain data="viewaccountmy"/>,<Footer/>]}/>
          <Route path="/advertiser_editprofile" element={[<Advertiserloginnav/>,<Advertisermain data="advertiser_editprofile"/>,<Footer/>]}/>
          <Route path="/advertiser_about" element={[<Advertiserloginnav/>,<Advertisermain data="advertiser_about"/>,<Footer/>]}/>
          <Route path="/advertiser_privacy" element={[<Advertiserloginnav/>,<Advertisermain data="advertiser_privacy"/>,<Footer/>]}/>


          <Route path="/advertiser_upload" element={[<Advertiserloginnav/>,<Advertiserupload/>,<Footer/>]}/>


          {/* moderator */}
          <Route path="/moderatorlogin" element={[<Adminlognav/>,<ModeratorLogin/>]}/>
          <Route path="/moderatorsidebar" element={[<Moderatorsidebar/>,<Footer/>]}/>
          <Route path="/req" element={<Moderatorrequest url={url}/>}/>
          <Route path="/moderator_requests" element={[<Moderatormain data="requestm"/>,<Footer/>]}/>
          <Route path="/moderator_singlerequest/:id" element={[<Moderatorsinglerequest url={url}/>]}/>






          {/* Admin */}
          <Route path="/admin-loginnav" element={<Adminlognav/>}/>
          <Route path="/admin" element={[<Adminlognav/>,<AdminLogin/>]}/>
          <Route path="/admin_sidebar" element={[<Adminlognav/>,<Adminsidebar/>]}/>
          <Route path="/admin_viewuser" element={[<Adminlognav/>,<Adminhome data="viewuser"/>,<Footer/>]}/>
          <Route path="/admin_viewsingleuser/:id" element={[<Adminlognav/>,<Adminhome data="viewsingleuser"/>,<Footer/>]}/>
          <Route path="/admin_dashboard" element={[<Adminlognav/>,<Adminhome data='admindashboard'/>,<Footer/>]}/>
          <Route path="/admin_viewadvertiser" element={[<Adminlognav/>,<Adminhome data='viewadvertiser'/>,<Footer/>]}/>
          <Route path="/viewsingleadvertiser/:id" element={[<Adminlognav/>,<Adminhome data='viewsingleadvertiser'/>,<Footer/>]}/>
          <Route path="/adminprivacy" element={[<Adminlognav/>,<Adminhome data='adminprivacy'/>,<Footer/>]}/>
          <Route path="/adminviewcontributer" element={[<Adminlognav/>,<Adminhome data='viewcontributer'/>,<Footer/>]}/>
          <Route path="/admin_viewsinglecontributer/:id" element={[<Adminlognav/>,<Adminhome data='viewsinglecontributer'/>,<Footer/>]}/>


          <Route path="/advertiser_request" element={[<Adminlognav/>,<Advertiserrequest/>,<Footer/>]}/>

          {/* 
              <Route path="/oneone" element={<HomePage/>}/>
              <Route path="/nav" element={<Navbar/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
