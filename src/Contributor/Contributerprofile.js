import React from 'react'
import "../Reader/Readerprofile.css"
import Contributersidebar from './Contributersidebar'
import Contributerviewprofile from './Contributerviewprofile'

function Contributerprofile({data}) {
  return (
    <div className='container_readerprofile'>
        <Contributersidebar/>
        {data === 'contributerviewprofile' ? (
            <Contributerviewprofile/>
        ):''}
    </div>
  )
}

export default Contributerprofile