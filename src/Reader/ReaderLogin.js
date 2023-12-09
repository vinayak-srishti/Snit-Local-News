import React from 'react'
import "../Reader/Readerlogin.css"

function ReaderLogin() {
  return (
    <div className='reader_login'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h2 className='reader_login_title'>Login</h2>
          </div>
          <form>
          <div className='col-sm-12 input_text'>
            <input type='text' placeholder='Mail id' />
          </div>
          <div className='col-sm-12 input_text'>
            <input type='password' placeholder='Password' />
          </div>
          <div className='col-sm-12 '>
            <h6 className='reader_fp'>Forget Password</h6>
          </div>
          <div className='col-sm-12 reader_login_button'>
            <button type='submit'  className='btn btn-primary'>LOGIN</button>
          </div>
          </form>
          <div className='col-sm-12 reader_login_or'>
            <p>OR</p>
          </div>
          <div className='col-sm-12 reader_login_last'>
            <p>YOU HAVE'NT ACCOUNT?<button type='submit'>CREATE ONE</button></p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default ReaderLogin
