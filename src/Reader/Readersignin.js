import React from 'react'
import "../Reader/Readersignin.css"
import img from "../Assets/signin.png"


function Readersignin() {
    return (
        <div className='reader_signin'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-6 col-md-6  reader_signin_img'>
                        <img src={img} alt='image' className='readre_img' />
                    </div>

                    <div className='col-sm-6 col-lg-6 col-md-6 reader_signin_title'>
                        <p className='reader_title'>Register</p>
                        <form>
                        <div className='row'>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='text' className='form_label' placeholder='First Name' />

                            </div>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='text' className='form_label' placeholder='Last Name' />
                            </div>
                            <div className="col-12 pb-3 input_radio ">
                                <label className="pb-3">Gender :</label>
                                <input type="radio" id="male" name="gender" value='Male' />
                                <label for="male">&nbsp; Male &nbsp;</label>
                                <input type="radio" id="female" name="gender" value='Female' />
                                <label for="female">&nbsp; Female &nbsp;</label>
                                <input type="radio" id="others" name="gender" value='Others' />
                                <label for="female">&nbsp; Others &nbsp;</label>
                            </div>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='text' className='form_label' placeholder='Age' />

                            </div>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='text' className='form_label' placeholder='Street' />
                            </div>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='text' className='form_label' placeholder='City' />

                            </div>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='text' className='form_label' placeholder='Pincode' />
                            </div>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='text' className='form_label' placeholder='State' />

                            </div>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='text' className='form_label' placeholder='Nationality' />
                            </div>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='email' className='form_label' placeholder='Email' />

                            </div>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='number' className='form_label' placeholder='Contact' />
                            </div>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='password' className='form_label' placeholder='Password' />

                            </div>
                            <div className="col-6 pb-3 reader_signin_input">
                                <input type='password' className='form_label' placeholder='Confirm Password' />
                            </div>
                            <div className="col-6 pb-3 reader_signin_button">
                                <button type='submit' className='btn btn-primary'>Register</button>
                            </div>


                        </div></form>
                    </div>

                </div>


            </div>




        </div>
    )
}

export default Readersignin