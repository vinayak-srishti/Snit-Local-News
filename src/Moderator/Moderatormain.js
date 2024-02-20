import React from 'react'
import Moderatorsidebar from './Moderatorsidebar'
import Moderatorrequest from './Moderatorrequest'
import Readreabout from '../Reader/Readreabout'
import Readerprivicay from '../Reader/Readerprivicay'
import Allreports from './Allreports'
import Viewsinglereport from './Viewsinglereport'

function Moderatormain({data}) {
  const url = "http://localhost:4004";

  return (
    <div style={{display:"flex"}}>
        <Moderatorsidebar/>
        {data=="request" ?(
            <Moderatorrequest/>
        ):data==='about' ?(
          <Readreabout/>
        ):data==="privacy" ?(
          <Readerprivicay/>
      ):data=="allreports" ?(
        <Allreports url={url}/>
      ):
        ""}
    </div>
  )
}

export default Moderatormain