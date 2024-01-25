import React from 'react'
import Moderatorsidebar from './Moderatorsidebar'
import Moderatorrequest from './Moderatorrequest'

function Moderatormain(data) {
  return (
    <div style={{display:"flex"}}>
        <Moderatorsidebar/>
        {data=="requestm" ?(
            <Moderatorrequest/>
        ):""}
    </div>
  )
}

export default Moderatormain