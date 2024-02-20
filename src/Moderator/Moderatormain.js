import React from 'react'
import Moderatorsidebar from './Moderatorsidebar'
import Moderatorrequest from './Moderatorrequest'
import Readreabout from '../Reader/Readreabout'
import Readerprivicay from '../Reader/Readerprivicay'

function Moderatormain({data}) {
  return (
    <div style={{display:"flex"}}>
        <Moderatorsidebar/>
        {data=="request" ?(
            <Moderatorrequest/>
        ):data==='about' ?(
          <Readreabout/>
        ):data==="privacy" ?(
          <Readerprivicay/>
        ):
        ""}
    </div>
  )
}

export default Moderatormain