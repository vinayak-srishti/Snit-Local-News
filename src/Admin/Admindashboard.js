import React from 'react'
import "../Admin/Admindashboard.css"

function Admindashboard() {
    return (
        <div className='col-8'>

            <div className='admin_dashboard container'>
                <div className='row'>
                    <div className='admin_dashboard_text'>
                        <h2 className='admindashboard_h2'>Dashboard</h2>
                    </div>
                    <div className='admin_dashboard_box col-2'>
                        <p>UserCount</p>
                        <h1 id='count'>100</h1>
                    </div>
                    <div className='admin_dashboard_box col-2'>
                    <p>Contributor count</p>
                    <h1 id='count'>200</h1>
                    </div>
                    <div className='admin_dashboard_box col-2'>
                    < p>Advertiser Count</p>
                    <h1 id='count'>300</h1>
                    </div>
                    <div className='admin_dashboard_box col-2'>
                    <p>Moderator Count</p>
                    <h1 id='count'>400</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admindashboard