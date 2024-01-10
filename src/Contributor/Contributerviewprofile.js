import React from 'react'
import "../Reader/Readerprofileaccountinfo.css"
import { Link } from 'react-router-dom'
import img from "../Assets/profileside.png"
import axiosInstance from '../BaseUrl'


function Contributerviewprofile() {
  return (
    <div className='col-8'>
    <div className='reader_profile_account_info' >
<div className='reader_profile_account_info_details row' >
<div className='col-7  reader_profile_account_info_fulldetails ' >
  <p >Account Info</p>
  <div className='reader_profile_account_info_fulldetails_box mb-3' >
    <p>First Name</p>
    <p>uiluil</p>
  </div>
  <div className='reader_profile_account_info_fulldetails_box mb-3' >
    <p>Last Name</p>
    <p>iuliul</p>
  </div>
  <div className='reader_profile_account_info_fulldetails_box mb-3' >
    <p>Gender</p>
    <p>iuliul</p>
  </div>
  <div className='reader_profile_account_info_fulldetails_box mb-3' >
    <p>Age</p>
    <p>iuliul</p>
  </div>
  <div className='reader_profile_account_info_fulldetails_box mb-3' >
    <p>Street</p>
    <p>uiluil</p>
  </div>
  <div className='reader_profile_account_info_fulldetails_box mb-3' >
    <p>City</p>
    <p>hrth</p>
  </div>
  <div className='reader_profile_account_info_fulldetails_box mb-3' >
    <p>State</p>
    <p>hthhyth</p>
  </div>
  <div className='reader_profile_account_info_fulldetails_box mb-3' >
    <p>Pincode</p>
    <p>trhtrh</p>
  </div>
  <div className='reader_profile_account_info_fulldetails_box mb-3' >
    <p>Nationality</p>
    <p>trhtrh</p>
  </div>
  <div className='reader_profile_account_info_fulldetails_box mb-3' >
    <p>Contact</p>
    <p>ththtrh</p>
  </div>
  <div className='reader_profile_account_info_fulldetails_box mb-3' >
    <p>Email</p>
    <p>emil</p>
  </div>

  <div className='reader_profile_account_info_editbtn ' >
    <Link to=''><button className='btn btn-primary' >Edit Profile</button></Link>
  </div>
</div>
<div className='col-5 reader_profile_account_info_image' >
  <img src={img} />
</div>
</div>
</div>

</div>

  )
}

export default Contributerviewprofile