import React, { useState } from 'react';
import "../Advertiser/Advertiserviewuploads.css"
import img from "../Assets/bunpic.png"
import { Link } from 'react-router-dom'
import { RiFileAddLine, RiInformationLine } from 'react-icons/ri';


function Advertiserviewuploads() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='col-9' style={{padding:"20px"}}>
        <div className='container addupload_main ' >

            <div className='row ' >
                <h2 className='col'>Uploads</h2>
                <div className='adminadvertiser_view_req col'>
                         <Link to='/advertiser_upload' style={{textDecoration:'none', color: 'black' }}>  <div className='ri-file-add-line' id='request'>Addnew</div></Link> 
                        </div>
            </div>


            <div className='addupload_main_paddings' style={{display:"auto"}}>
            {[1,2,3,4].map((index)=>(
            <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
             className='col addupload_main_padding'>
                <div className='addupload_image'>
                    <img src={img} alt='image'/>
                </div>
                <div className='addupload_box'>
                    <h5>Add title</h5>
                   <p>Add content fb kjv buf </p> 
                   {hoveredIndex === index && (
                  <div className='icon-container'>
                    {/* Place your icon here */}
                    <i className='ri-edit-2-line'></i>
                  </div>
                )}
                </div>
            </div>
))}



            <div className='col addupload_main_padding'>
                <div className='addupload_image'>
                    <img src={img} alt='image'/>
                </div>
                <div className='addupload_box'>
                    <h5>Add title</h5>
                    <p>Add content fb kjv buf </p>  
                </div>
            </div>
            <div className='col addupload_main_padding'>
                <div className='addupload_image'>
                    <img src={img} alt='image'/>
                </div>
                <div className='addupload_box'>
                    <h5>Add title</h5>
                    <p>Add content fb kjv buf </p>  
                </div>
            </div>
            <div className='col addupload_main_padding'>
                <div className='addupload_image'>
                    <img src={img} alt='image'/>
                </div>
                <div className='addupload_box'>
                    <h5>Add title</h5>
                    <p>Add content fb kjv buf </p>  
                </div>
            </div>
            </div>

        </div>

    </div>
  )
}

export default Advertiserviewuploads