import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Readersignin from "./Reader/Readersignin";
import ReaderLogin from "./Reader/ReaderLogin";

function App() {
  //local
  const url = "http://localhost:4004";

  return (
    <BrowserRouter>
      <div>
        <Routes>
          
          <Route path="/readersignin"  element={<Readersignin/>}/>
          <Route path="/readerlogin"  element={<ReaderLogin/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
