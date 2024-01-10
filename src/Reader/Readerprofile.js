import React from 'react'
import "../Reader/Readerprofile.css"
import Readerprofilesidebar from "./Readerprofilesidebar"
import Readerprofileaccountinfo from './Readerprofileaccountinfo'
import Readerpageroles from './Readerpageroles'
import Readereditprofile from './Readereditprofile'
import Readerprivicay from './Readerprivicay'
import Readreabout from './Readreabout'

function Readerprofile({data}) {
  return (
    <div className='container_readerprofile'>
        <Readerprofilesidebar className='Readerprofilesidebar'/>
        {data === "account" ?(
            <Readerprofileaccountinfo className='Readerprofileaccountinfo'/>
        ):data === "pagerole" ?(
          <Readerpageroles />
        ):data==="editprofile" ?(
          <Readereditprofile/>
        ):data=="readerprivacy" ?(
          <Readerprivicay/>
        ):data=="readerabout" ?(
          <Readreabout/>
        ):
        ''}
    </div>
  )
}

export default Readerprofile