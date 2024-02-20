import React from 'react'
import "../Reader/Footer.css"
import img from "../Assets/logo.png"
import youtube from "../Assets/youtube.png"

function Footer() {
  return (
    <div className='footer_reader_main'>
    <div className='container '>
        <div className='row'>
            <div className='footer_reader col-2'>
                <h4>World</h4>
                <p>Africa</p>
                <p>India</p>
                <p>Chaina</p>
                <p>America</p>
                <p>Korea</p>
                <p>Andaman</p>
                <p>United Kingdom</p>
                <p>London</p>

            </div>
            <div className='footer_reader col-2'>
                <h4>Bussiness</h4>
                <p>Market </p>
                <p>Tech</p>
                <p>Calculators</p>
                <p>Videos</p>
                {/* <p>Korea</p>
                <p>Andaman</p>
                <p>United Kingdom</p>
                <p>London</p> */}

            </div>
            <div className='footer_reader col-2'>
                <h4>Health</h4>
                <p>Food </p>
                <p>Fitness</p>
                <p>Mental health</p>
                <p>Relationship</p>
                <p>Sleep</p>
            </div>
            <div className='footer_reader col-2'>
                <h4>Entertainment</h4>
                <p>Movies </p>
                <p>Serieses</p>
                <p>Television</p>
                <p>Celebrity</p>
            </div>
            <div className='footer_reader col-2'>
                <h4>Tech</h4>
                <p>Innovative </p>
                <p>Gadget</p>
                <p>Forceable feature</p>
                <p>Innovative cities</p>
            </div>
            <div className='footer_reader col-2'>
                <h4>Style</h4>
                <p>Arts </p>
                <p>Design</p>
                <p>Fashion</p>
                <p>Lexuary</p>
                <p>Beauty</p>
            </div>
            <div className='footer_reader col-2'>
                <h4>Travel</h4>
                <p>Destination </p>
                <p>Food & Drink</p>
                <p>Stay</p>
                <p>News</p>
                <p>Videos</p>
            </div>
            <div className='footer_reader col-2'>
                <h4>Sports</h4>
                <p>Foodball </p>
                <p>Tennis</p>
                <p>Cricket</p>
                <p>Golf</p>
                <p>Moto gp</p>
                <p>Indian sports</p>
                <p>Olympics</p>
                <p>Climping</p>
                <p>Esports</p>
                <p>Hockey</p>
            </div>
            <div className='footer_reader col-2'>
                <h4>Weather</h4>
                <p>Climate </p>
                <p>Wild fire tracker</p>
            </div>
            <div className='footer_reader col-2'>
                <h4>Features</h4>
                <p>As equals </p>
                <p>Call to earth</p>
                <p>Freedom project</p>
                <p>2 degree</p>
                <p>All features</p>
            </div>
        </div>
        <div className='row'>
            <hr></hr>
                <div className='footer_reader col-5'>
                    <img src={img} alt='images'/>
                </div>
                <div className='footer_reader_text col-6 '>
                    <ul>
                        <li> <h3>Follow Us</h3> </li>
                        {/* <li><img src={youtube} alt='text'/></li> */}
                    </ul>
                   
                    
                </div>   
                   {/* <div className='ri-youtube-line col-1'>
                        <img src={inst} alt='imiage ' width="50px" height="50px" className='imageinstagram'/>
                </div> */}
        </div>
    </div>
    </div>
  )
}

export default Footer