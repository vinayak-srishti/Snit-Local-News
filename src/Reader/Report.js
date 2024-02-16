import React from 'react'
import { Link } from 'react-router-dom'

function Report() {
  return (
    <div>
        <div className="col-12 pb-3 input_radio " >
                                    <input type="radio" id="spam"   />
                                    <label for="spam">&nbsp; Spam or misleading &nbsp;</label><br/>
                                    <input type="radio" id="sexualcontent"  />
                                    <label for="sexualcontent">&nbsp; Sexual content &nbsp;</label><br/>
                                    <input type="radio" id="Violent"  />
                                    <label for="Violent">&nbsp; Violent or repulsive content &nbsp;</label><br/>
                                    <input type="radio" id="content"   />
                                    <label for="content">&nbsp; Hateful or Abusive content&nbsp;</label><br/>
                                     <input type="radio" id="acts"   />
                                    <label for="acts">&nbsp; Harmful or dangerous acts &nbsp;</label><br/>
                                    <input type="radio" id="abuse"   />
                                    <label for="abuse">&nbsp; Child abuse &nbsp;</label><br/>
                                </div>
                                <button type='submi' style={{marginLeft:"95px",backgroundColor:"orange",borderRadius:"12px",width:"100px"}}>Submit</button>

    </div>
  )
}

export default Report