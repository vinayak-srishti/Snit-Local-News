import React, { useEffect,useState } from 'react'
import img from "../Assets/bunpic.png"
import axiosInstance from '../BaseUrl'
import { Link } from 'react-router-dom';

function Readersports() {
  const url={baseurl:"http://localhost:4004"}
  const [category, setCategory] = useState('Sports');
  const [newsData, setNewsData] = useState([]);


  const viewallnewsbycategory=(()=>{
    axiosInstance.post(`viewallNewsByCategory`,{category})
    .then((res)=>{
      console.log(res);
      setNewsData(res.data.msg)
      console.log(res.data.msg);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  useEffect(()=>{
   viewallnewsbycategory();
  },[])

  return (
    <div className='reader_politics container'>
              <h1>Sports</h1>

              {newsData.length ?(
                newsData.map((a)=>{
                    const dateTime = new Date(a.date);
                    const timeString = dateTime.toLocaleTimeString();
                    console.log(a.image.filename);
                    console.log(`${url}/${a.image.filename}`);
               return(
                
    <div className='row'>
      <div className='col-md-5 readre_politics_image'>
        <img src={`${url.baseurl}/${a.image.filename}`} alt='images'/>
      </div>
      <div className='col-md-6 offset-md-1  reader_politics_text'>
      <h2>"{a.title}"</h2>
      <p>{a.content}
      <Link to={"/viewonenewssports/"+a._id}><button type='submit' className='readmorebtn'>Read more</button></Link>
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







    </div>
  )
}

export default Readersports