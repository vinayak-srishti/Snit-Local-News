import React from "react";
import "../Reader/Comments.css";

function Comments() {
  return (
    <div className="comments-main">
      <div className="container">
        <div className="row">
          <div className="comments-main-head">
            <h3>Comments</h3>
          </div>
          <div className="row comments-main-content">
            <div className="col-6">
              <div className="ri-map-pin-user-fill">Rahul</div>
            </div>
            <div className="col-6">
              <div className="ri-map-pin-time-line" style={{paddingLeft:"250px"}}>Rahul</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>
                uieb eeycvc yuc cveucebyuf uyukgycdbvcj,hyg yu dvbdhv v uycuc
                dcdnbcbvd cfg ewukfyfvkfv vugewfvewkcvdchj eyguehbfvej bdchhjC
                V,DWJY GFKWGY EKFUGFEWFJiu vugewfvewkcvdchj iufhuf juf iulewwel
                gwerfiubvdvhjbds vsd loremc dhcve lyug
              </p>
            </div>
            <div>
              <button type="button" className="ri-thumb-up-line">
                {" "}
              </button>
              <button type="button" className="ri-thumb-down-line">
                {" "}
              </button>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
