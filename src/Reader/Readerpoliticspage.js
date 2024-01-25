import React, { useEffect, useState } from 'react'
import "../Reader/Readerpoliticspage.css"
import img from "../Assets/bunpic.png"
import axiosInstance from '../BaseUrl'
import { Link } from 'react-router-dom'


function Readerpoliticspage() {
  const[category,setCategory]=useState('Politics')
  const[data,setData]=useState({})
  useEffect(()=>{
    axiosInstance.post(`viewallNewsByCategory`,{category})
    .then((res)=>{
      console.log(res);
      setData(res.data.msg)
      console.log(res.data.msg);
    })
    .catch((Err)=>{
      console.log(Err);
    })
  },[])

  return (
    <div className='reader_politics container'>
      <h1>Politics</h1>


      {data.length ?(
                data.map((a)=>{
                    const dateTime = new Date(a.date);
                    const timeString = dateTime.toLocaleTimeString();
               return(

    <div className='row'>
      <div className='col-md-5 readre_politics_image'>
        <img src={img} alt='images'/>
      </div>
      <div className='col-md-6 offset-md-1  reader_politics_text'>
      <h2>"{a.title}"</h2>
      <p>{a.content}
      <Link to={"/viewonepolitics/"+a._id}><button type='submit' className='readmorebtn'>Read more</button></Link>
      </p>
        <div className='like-dislike-buttons'>
              <button type='button' className='ri-thumb-up-line'> </button>
              <button type='button' className='ri-thumb-down-line'> </button>
              <button className='ri-user-line' id='reader_usename'>Rahul</button>
              <button className='ri-map-pin-line' id='reader_location'>{a.location}</button>
              <button className='ri-map-pin-time-line' id='reader_time'>{timeString}</button>

            </div>
      </div>
    </div> 

)
})
) : (
    <div>No data available</div>
)}   



    {/* <div className='row'>
      <div className='col-md-5 readre_politics_image'>
        <img src={img} alt='images'/>
      </div>
      <div className='col-md-6 offset-md-1  reader_politics_text'>
      <h2>"Navigating the Global Chess Board:Power Play Among Nations"</h2>
      <p>In the ever-shifting landscape of international relations, the world is witnessing a intrica
        te dance of power and strategy among major players. The United States, China, and Russia find thems
        elves at the center of
         a geopolitical chessboard where each move has far-reaching consequences.<button type='submit' className='readmorebtn'>Read more</button></p>
         <div className='like-dislike-buttons'>
              <button type='button' className='ri-thumb-up-line'> </button>
              <button type='button' className='ri-thumb-down-line'> </button>
              <button className='ri-user-line' id='reader_usename'>Rahul</button>
              <button className='ri-map-pin-line' id='reader_location'>Mumbai</button>
              <button className='ri-map-pin-time-line' id='reader_time'>10 min ago.</button>

            </div>
      </div>
    </div>      
    <div className='row'>
      <div className='col-md-5 readre_politics_image'>
        <img src={img} alt='images'/>
      </div>
      <div className='col-md-6 offset-md-1  reader_politics_text'>
      <h2>"International Relations"</h2>
      <p>Recently, there have been discussions about the evolving dynamics between major world powers. 
        The ongoing tensions and diplomatic maneuvers between the United States, China, and Russia have been
         at the forefront. Issues such as trade relations, geopolitical strategies, and responses to global challenges like climate change are shaping the narrative. It's a complex web of interactions that often involves a 
        delicate balance of cooperation and competition.<button type='submit' className='readmorebtn'>Read more</button></p>
        <div className='like-dislike-buttons'>
              <button type='button' className='ri-thumb-up-line'> </button>
              <button type='button' className='ri-thumb-down-line'> </button>
              <button className='ri-user-line' id='reader_usename'>Rahul</button>
              <button className='ri-map-pin-line' id='reader_location'>Mumbai</button>
              <button className='ri-map-pin-time-line' id='reader_time'>10 min ago.</button>

            </div>
      </div>
    </div>       */}

    </div>
  )
}

export default Readerpoliticspage