import React from 'react'
import "./Viewsubscription.css"
import { Link } from 'react-router-dom'

function Viewsubscription() {
  return (
    <div className='col-9' style={{padding:"20px"}}>
        <div className='container'>
            <div className='row'>
                <div className='col-9 viewsubscription-head'>
                   <h3> Subscription Plans</h3>
                </div>
                {/* <div className='col-3 add-new-box'>
                    <Link to="/addsubscription" style={{textDecoration:"none",color:"black"}}><span className='ri-play-list-add-line'>Add New</span></Link>
                </div> */}

                <div className='row viewsubscription-table'>
                  <div className='col-2'><p>Plans</p></div>
                  {/* <div className='col-2'><p>Duration</p></div> */}
                  <div className='col-4'><p>Features</p></div>
                  <div className='col-2'><p>Price</p></div>
                  <div className='col-3'><p>Date</p></div>
                </div>

                <div className='row viewsubscription-table-bottom'>
                  <div className='col-2'><p>Gold Membership</p></div>
                  {/* <div className='col-2'><p>7 Days</p></div> */}
                  <div className='col-4'><p>1.whjbfhjebfejfnbkejbfjebfhjeb fhjehjbvhjbvhjwrbvjh <br/>2.jvdv
                    efjhurwihfurw gfuewbvhjvsv
                    eejp evhoihiuhwiv wdv
                    wrf rwefiuhrwuguigefiuew</p></div>
                  <div className='col-2'><p>58</p></div>
                  <div className='col-3'>
                    <p>22/08/2024</p>
                    <div className=''>
                      <button className='col-4' type='submit'style={{color:"blue"}}>Edit</button>
                      <button className='col-4'type='submit'style={{color:"red"}}>Delete</button>

                    </div>
                    </div>
                </div>
                <div className='row viewsubscription-table-bottom'>
                  <div className='col-2'><p>Silver Membership</p></div>
                  {/* <div className='col-2'><p>7 Days</p></div> */}
                  <div className='col-4'><p>1.whjbfhjebfejfnbkejbfjebfhjeb fhjehjbvhjbvhjwrbvjh <br/>2.jvdv
                    efjhurwihfurw gfuewbvhjvsv
                    eejp evhoihiuhwiv wdv
                    wrf rwefiuhrwuguigefiuew</p></div>
                  <div className='col-2'><p>58</p></div>
                  <div className='col-3'>
                    <p>22/08/2024</p>
                    <div className=''>
                      <button className='col-4' type='submit'style={{color:"blue"}}>Edit</button>
                      <button className='col-4'type='submit'style={{color:"red"}}>Delete</button>

                    </div>
                    </div>
                </div>

                <div className='row viewsubscription-table-bottoms'>
                  <div className='col-2'><p>Diamond Membership</p></div>
                  {/* <div className='col-2'><p>7 Days</p></div> */}
                  <div className='col-4'><p>1.whjbfhjebfejfnbkejbfjebfhjeb fhjehjbvhjbvhjwrbvjh <br/>2.jvdv
                    efjhurwihfurw gfuewbvhjvsv
                    eejp evhoihiuhwiv wdv
                    wrf rwefiuhrwuguigefiuew</p></div>
                  <div className='col-2'><p>58</p></div>
                 
                </div>
            </div>

        </div>
    </div>
  )
}

export default Viewsubscription