import React, { useEffect, useState } from 'react'
import "../Admin/Admindashboard.css"
import axiosInstance from '../BaseUrl'


function Admindashboard() {
    const [data, setdata] = useState([])
    const [advertiser, setAdvertiser] = useState([])
    const [contributer, setContributer] = useState([])



    useEffect(() => {
        axiosInstance.post(`viewallusers`)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === 200) {
                    setdata(res.data.data);

                } else if (res.data.status === 500) {
                    alert("No user found");
                }
            })

            .catch((err) => {
                console.log(err);
            })

        axiosInstance.post(`/viewalladvertiser`, advertiser)
            .then((res) => {
                console.log(res.data);
                setAdvertiser(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })

        axiosInstance.post(`/viewallcontributer`,contributer)
        .then((res) => {
            console.log(res.data);
            setContributer(res.data.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    console.log(advertiser.length);

    return (
        <div className='col-9' style={{margin:"20px"}}>

            <div className='admin_dashboard container'>
                <div className='row'>
                    <div className='admin_dashboard_text'>
                        <h2 className='admindashboard_h2'>Dashboard</h2>
                    </div>
                    <div className='admin_dashboard_box col-2'>
                        <p>UserCount</p>
                        <h1 id='count'>{data.length}</h1>
                    </div>
                    <div className='admin_dashboard_box col-2'>
                        <p>Contributor count</p>
                        <h1 id='count'>{contributer.length}</h1>
                    </div>
                    <div className='admin_dashboard_box col-2'>
                        < p>Advertiser Count</p>
                        <h1 id='count'>{advertiser.length}</h1>
                    </div>
                    <div className='admin_dashboard_box col-2'>
                        <p>Moderator Count</p>
                        <h1 id='count'>1</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='admin_dashboard_text'>
                        <h2 className='admindashboard_h2' >Users</h2>
                    </div>


                    <div className='admindashboard_users' style={{ display: 'flex' }}>
                        <p className='col-2'>Reg no</p>
                        <p className='col-2'>Name</p>
                        <p className='col-2'>Status </p>
                        <p className='col-3'>Account Status</p>
                        {/* <p className='col-2'>Activity</p> */}
                        <p className='col-4'>Location</p>
                    </div>
                    {data.length ? (
                        data.map((a) => (
                            <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                                <p className='col-2'>784</p>
                                <p className='col-2'>{a.firstname}</p>
                                <p className='col-2'>Paid </p>
                                <p className='col-3'>Activite</p>

                                <p className='col-4'>{a.street},{a.state}</p>
                            </div>
                        ))
                    ) : (
                        <div>No data available</div>
                    )}




                    {/*   <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                        <p className='col-2'>Reg no</p>
                        <p className='col-2'>Name</p>
                        <p className='col-2'>Status </p>
                        <p className='col-4'>Account Status</p>
                     
                        <p className='col-4'>Location</p>
                    </div> */}

                </div>

                <div className='row'>
                    <div className='admin_dashboard_text' style={{ marginTop: '30px' }}>
                        <h2 className='admindashboard_h2' >Advertiser</h2>
                    </div>
                    <div className='admindashboard_users' style={{ display: 'flex' }}>
                        <p className='col-2'>Reg no</p>
                        <p className='col-2'>Company </p>
                        <p className='col-3'>Email </p>
                        <p className='col-3'>Contact</p>
                        {/* <p className='col-2'>Activity</p> */}
                        <p className='col-4'>Location</p>
                    </div>
                    {advertiser.length ? (
                        advertiser.map((b) => (
                            <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                                <p className='col-2'>{b.regno}</p>
                                <p className='col-2'>{b.companyname}</p>
                                <p className='col-3'>{b.email}</p>
                                <p className='col-3'>{b.contact}</p>
                                {/* <p className='col-2'>Activity</p> */}
                                <p className='col-4'>{b.street}</p>
                            </div>
                        ))
                    ) : (
                        <div>No data available</div>
                    )}

                    {/* <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                        <p className='col-2'>Reg no</p>
                        <p className='col-2'>Name</p>
                        <p className='col-2'>Status </p>
                        <p className='col-4'>Account Status</p>
                        <p className='col-4'>Location</p>
                    </div> */}

                </div>

                <div className='row'>
                    <div className='admin_dashboard_text' style={{ marginTop: '30px' }}>
                        <h2 className='admindashboard_h2' >Contributor</h2>
                    </div>
                    <div className='admindashboard_users' style={{ display: 'flex' }}>
                        <p className='col-2'>Reg no</p>
                        <p className='col-2'>Company </p>
                        <p className='col-3'>Email </p>
                        <p className='col-2'>Contact</p>
                        {/* <p className='col-2'>Activity</p> */}
                        <p className='col-4'>Location</p>
                    </div>
                    {contributer.length ? (
                        contributer.map((c) => (
                    <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                        <p className='col-2'>784</p>
                        <p className='col-2'>{c.firstname} {c.lastname}</p>
                        <p className='col-3'>{c.email} </p>
                        <p className='col-2'>{c.contact}</p>
                        {/* <p className='col-2'>Activity</p> */}
                        <p className='col-4'>{c.street}</p>
                    </div>
 ))
 ) : (
     <div>No data available</div>
 )}

                    {/* <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                        <p className='col-2'>Reg no</p>
                        <p className='col-2'>Name</p>
                        <p className='col-2'>Status </p>
                        <p className='col-4'>Account Status</p>
                      
                        <p className='col-4'>Location</p>
                    </div> */}

                </div>



            </div>
        </div>
    )
}

export default Admindashboard