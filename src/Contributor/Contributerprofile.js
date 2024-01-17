import React from 'react'
import "../Reader/Readerprofile.css"
import Contributersidebar from './Contributersidebar'
import Contributerviewprofile from './Contributerviewprofile'
import Contributeraddnews from './Contributeraddnews'
import Contributereditprofile from './Contributereditprofile'

function Contributerprofile({data}) {
  return (
    <div className='container_readerprofile'>
        <Contributersidebar/>
        {data === 'contributerviewprofile' ? (
            <Contributerviewprofile/>
        ):data=== 'contributereditprofile' ?(
          <Contributereditprofile/>
        ) :
        ''}
    </div>
  )
}

export default Contributerprofile