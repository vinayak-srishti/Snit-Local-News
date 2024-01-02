import React from 'react'
import "../Reader/Readerprofile.css"
import Readerprofilesidebar from "./Readerprofilesidebar"
import Readerprofileaccountinfo from './Readerprofileaccountinfo'
import Readerpageroles from './Readerpageroles'

function Readerprofile({data}) {
  return (
    <div className='container_readerprofile'>
        <Readerprofilesidebar className='Readerprofilesidebar'/>
        {data === "account" ?(
            <Readerprofileaccountinfo className='Readerprofileaccountinfo'/>
        ):data === "pagerole" ?(
          <Readerpageroles />
        ):
        ''}
    </div>
  )
}

export default Readerprofile