import React from 'react'
import "../Admin/Adminhome.css"
import Adminsidebar from "./Adminsidebar"
import Adminviewuser from "./Adminviewuser"
import { date } from 'yup'
import Adminviewsingleuser from './Adminviewsingleuser'
import Admindashboard from './Admindashboard'
import Adminviewadvertiser from './Adminviewadvertiser'
import Adminviewsingleadvertiser from './Adminviewsingleadvertiser'
import Adminprivacy from './Adminprivacy'
import Adminviewcontributer from './Adminviewcontributer'
import Adminviewsinglecontributer from './Adminviewsinglecontributer'

function Adminhome({data}) {
  return (
    <div className='container_adminprofile'>
        <Adminsidebar/>
        {data === "viewuser" ?(
            <Adminviewuser/>
        ):data == "viewsingleuser" ?(
          <Adminviewsingleuser/>
        ):data == "admindashboard" ?(
          <Admindashboard/>
        ):data == 'viewadvertiser' ?(
            <Adminviewadvertiser/>
        ):data=='viewsingleadvertiser' ?(
          <Adminviewsingleadvertiser/>
        ): data =='adminprivacy' ?(
          <Adminprivacy/>
        ): data == "viewcontributer" ?(
          <Adminviewcontributer/>
        ):data =="viewsinglecontributer" ?(
          <Adminviewsinglecontributer/>
        )
        :"" }
    </div>
  )
}

export default Adminhome