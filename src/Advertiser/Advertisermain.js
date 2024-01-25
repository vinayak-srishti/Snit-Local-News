import React from 'react'
import Advertisersidebar from './Advertisersidebar'
import Advertiserviewuploads from './Advertiserviewuploads'
import Advertiserupload from './Advertiserupload'
import Advertiserviewaccount from './Advertiserviewaccount'
import Advertisereditprofile from './Advertisereditprofile'
import Aboutadvertiser from './Aboutadvertiser'
import Privacyadvertiser from './Privacyadvertiser'

function Advertisermain({data}) {
  return (
    <div style={{display:"flex"}}>
        <Advertisersidebar/>
        {data== "viewpro" ?(
            <Advertiserviewuploads/>
        ): data=="uploadadd" ?(
            <Advertiserupload/>
        ):data=="viewaccountmy" ?(
          <Advertiserviewaccount/>
        ):data =="advertiser_editprofile" ?(
          <Advertisereditprofile/>
        ): data =="advertiser_about" ?(
          <Aboutadvertiser/>
        ):data == "advertiser_privacy" ?(
          <Privacyadvertiser/>
        )
        :""}
    </div>
  )
}

export default Advertisermain