import React, { useState } from 'react'
import "../Contributor/Contributeraddnews.css"
import img from "../Assets/rightarrow.png"
import { Link } from 'react-router-dom';

function Contributeraddnews() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // Read the file and set it to state
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedFile(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            // If no file is selected, reset the state
            setSelectedFile(null);
        }
    };

    return (
        <div className='col-8 contributer_addnews_main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-2  contributer_arrow'>
                       <Link to='/contributer_viewprofile'> <img src={img} alt='images' width='40px' height='40px' /></Link>
                    </div>
                    <div className='col-6 contributer_arrow'>
                        <h2>Add News</h2>
                    </div>

                </div>
                <form>
                <div className='row'>
                    <div className='col-7 contributer_addnews'>
                        <label htmlFor="fileInput" style={{ position: 'relative', display: 'inline-block' }}>
                            {selectedFile ? (
                                <img
                                    src={selectedFile}
                                    alt="Selected File Preview"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }}
                                />
                            ) : (
                                <div
                                    style={{
                                        width: '10cm',
                                        height: '10cm',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        backgroundColor: '#f9f9f9',
                                    }}
                                >
                                    <p style={{ textAlign: 'center', marginTop: '1.5cm' }}>Select File</p>
                                </div>
                            )}
                            <input
                                type="file"
                                id="fileInput"
                                name="fileInput"
                                accept=".jpg, .jpeg, .png" // Define the accepted file types if necessary
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0,
                                    cursor: 'pointer',
                                }}
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>
                    <div className='col-3 ccccccccccc'>
                        <div className='row contributer_addnewsone '>
                            <h4>Title</h4>
                        </div>
                        <div className='row contributer_input'>
                            <input type='text'/>
                        </div>
                        <div className='row contributer_content '>
                            <h4>Content</h4>
                        </div>
                        <div className=' '>
                            <textarea className='contributer_addnews_textarea' />
                        </div>
                        <div className='row contributer_addnewsone 'style={{paddingTop:"10px"}}>
                            <h4>Link</h4>
                        </div>
                        <div className='row contributer_input'>
                            <input type='text'/>
                        </div>
                        <div className='row contributer_addnewsone' style={{paddingTop:"10px"}}>
                            <h4>Location</h4>
                        </div>
                        <div className='row contributer_input'>
                            <input type='text'/>
                        </div>
                    </div>

                </div>
                <div className='coontributor_button'>
                                <button type='submit' className='btn btn-primary'>Upload</button>
                </div>
                </form>
            </div>

        </div>
    )
}

export default Contributeraddnews