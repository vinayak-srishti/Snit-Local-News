import React from 'react'
import "../Admin/Adminhome.css"
import Adminsidebar from "./Adminsidebar"
import Adminviewuser from "./Adminviewuser"
import { date } from 'yup'
import Adminviewsingleuser from './Adminviewsingleuser'

function Adminhome({data}) {
  return (
    <div className='container_adminprofile'>
        <Adminsidebar/>
        {data === "viewuser" ?(
            <Adminviewuser/>
        ):data == "viewsingleuser" ?(
          <Adminviewsingleuser/>
        ):"" }
    </div>
  )
}

export default Adminhome