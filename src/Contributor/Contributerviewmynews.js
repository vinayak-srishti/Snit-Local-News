import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrl";

function Contributerviewmynews() {
  const contributerid=localStorage.getItem("contibuterid")
  console.log(contributerid);

  const[data,setData]=useState([])

  useEffect(()=>{
    axiosInstance.post(`viewnewsByContributorId/${contributerid}`)
    .then((res)=>{
      console.log(res);
      setData(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  return (
    <div className="reader_politics container" style={{ margin: "30px" }}>
      <h1>Sports</h1>
      {data.length ? (
      data.map((a) => {
        const dateTime = new Date(a.date);
        const timeString = dateTime.toLocaleTimeString();
        return (
      <div className="row" style={{margin:"30px"}}>
        <div className="col-md-5 readre_politics_image">
          <img src={""} alt="images" />
        </div>
        <div className="col-md-6 offset-md-1  reader_politics_text">
          <h2>"kjbkjbkjbkjb"</h2>
          <p>
            iohu h ;oij;iojojojojij
            <button type="submit" className="readmorebtn">
              Read more
            </button>
          </p>
          {/* <div className='like-dislike-buttons'> */}
          <button className="ri-map-pin-line" id="reader_location">
            wws
          </button>
          <button className="ri-map-pin-time-line" id="reader_time">
            xswdxwsd
          </button>

          {/* </div> */}
        </div>
      </div>
   
   );
 })
) : (
 <div>No data available</div>
)}

    </div>
  );
}

export default Contributerviewmynews;
