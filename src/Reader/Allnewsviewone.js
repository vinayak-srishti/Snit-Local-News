import React, { useEffect, useState } from 'react'
import "../Reader/Readerviewone.css"
import img from "../Assets/rightarrow.png"
import img1 from "../Assets/bunpic.png"
import imgopt from "../Assets/option.png"
import Popup from "reactjs-popup"
import { Link, useParams } from 'react-router-dom'
import axiosInstance from '../BaseUrl'
import Menu from './Menu'
import { Modal,Button } from 'react-bootstrap'
import Comments from './Comments'


function Allnewsviewone({url}) {
    const id=useParams()
    const[data,setdata]=useState({ image: { filename: ''  }})

    const [showMenuModal, setShowMenuModal] = useState(false);
    const handleLoginButtonClick = () => {
        setShowMenuModal(true);
    };

    const handleMenuModalClose = () => {
        setShowMenuModal(false);
    };
    const [showComments, setShowComments] = useState(false); 
    const handleCommentsButtonClick = () => {
        setShowComments(true);
    };

    useEffect(()=>{
        axiosInstance.post(`viewnewsById/${id.id}`)
        .then((res)=>{
            console.log(res);
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    // console.log(data.data.image.filename);
console.log(data);
    const dateTime = new Date(data.date);
    const timeString = dateTime.toLocaleTimeString();

  return (
    <div className='container reader_viewone'  style={{margin:"30px"}}>
    <div className='row'>
        <div className='reader_viewone col-1 '>
           {/* <Link to="/others"><img src={img} alt='imageartrow' width='40px' height='40px' /></Link>  */}
        </div>
        <div className='reader_viewone col-10 '>
            <h2>{data.category}</h2>
        </div>
        </div>
        <div className='row' >
            <div className='col-11 '>

                <img src={`${url}/${data.image.filename}`} alt='images' className='reader_viewone_image'  />
            </div>
            <div className='col-1'>
                    <img src={imgopt} alt='option img' width="40px" height="40px" onClick={handleLoginButtonClick}/>
            </div>
        </div>
        <div className='row  reader_viewone-title'>
            <h2>"{data.title}"</h2>
        </div>
        <div className='row reader_viewone-text'>
            <p>{data.content}<br/>{data.subcontent}
            </p>
        </div>
        <div className='reader_viewone-likesdislikes '>
          <button type='button' className='ri-thumb-up-line'> </button>
          <button type='button' className='ri-thumb-down-line'> </button>
          <button type='submit' className='ri-message-2-line' onClick={handleCommentsButtonClick}  style={{marginLeft:"40px",border:"none",width:"40px",height:"40px"}}></button>
          <button className='ri-user-line' id='reader_usename' style={{paddingLeft:"700px"}}> {data.contributorid?.firstname}</button>
          <button className='ri-map-pin-line' id='reader_location'>{data.location}</button>
          <button className='ri-map-pin-time-line' id='reader_time'>{timeString}</button>

        </div>
        <Modal show={showMenuModal} onHide={handleMenuModalClose} style={{width:"250px" ,marginLeft:"1000px"}}>
                <Modal.Header closeButton>
                    <Modal.Title>Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Menu nid={id.id} />
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleMenuModalClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
            {showComments && <div className="footer-comments" style={{marginLeft:"100px"}}>
                <Comments />
            </div>}
</div>

  )
}

export default Allnewsviewone