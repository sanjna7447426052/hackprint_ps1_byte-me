import React from "react";
import './Data.css';
export default function Data(){
    return(
        <>
            <div className="choose">
         <div className="container">
            <div className="row">
            <div className="container1 mt-10" style={{marginBottom: "6rem"}}>
            <h2  className="text-center" style={{color: "white"}}>Tomato</h2>
            <p className="text-center" style={{color: "white"}}>The major tomato producing states are Bihar, Karnataka, Uttar Pradesh, Orissa, Maharashtra, Andhra Pradesh, Madhya Pradesh and West Bengal. In Punjab state, Amritsar, Ropar, Jalandhar, Hoshiarpur are tomato growing districts. It can be grown in varied type of soil ranging from sandy loam to clay, black soil and red soil having proper drainage. It gives best result when grown under well drained sandy soil with high organic content. For good growth pH of soil should be 7-8.5. It can tolerate moderate acidic and saline soil. Avoid cultivation in high acidic soils. For early crops, light soil is beneficial where for heavy yields clay loam and silt-loam soils are useful. For northern state, tomato cultivation for spring season is done in late November and transplanted in second fortnight of January</p>
            </div>
               <div className="col-md-8">
                  <div className="titlepage">
                     
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="row d_flex">
              <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
               <div className="padding_with">
               <div className="row">
                  <div className="col-md-6 padding_bottom">
                     <div className="choose_box">
                        <i><img src="..." alt="#"/></i>
                        <div className="choose_text">
                           <h3>Excellent Seed</h3>
                           <p>For early crops, light soil is beneficial where for heavy yields clay loam</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 padding_bottom">
                     <div className="choose_box">
                        <i><img src="..." alt="#"/></i>
                        <div className="choose_text">
                           <h3>Clean harvest</h3>
                           <p></p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 padding_bottom2">
                     <div className="choose_box">
                        <i><img src="images/icon3.png" alt="#"/></i>
                        <div className="choose_text">
                           <h3>Quality And Reliability</h3>
                           <p></p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="choose_box">
                        <i><img src="images/icon4.png" alt="#"/></i>
                        <div className="choose_text">
                           <h3>Expert Farmer</h3>
                           <p></p>
                        </div>
                     </div>
                  </div>
               </div>

               </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
               <div className="choose_img">
                  <figure><img src="tamato.jpg" alt="#"/></figure>
               </div>
            </div>
         </div>
      </div>
      <div className="container">
         <div className="row">
            <div className="col-md-5">
                <a className="read_more" href="#">Read More</a>
            </div>
         </div>
      </div>
      </div>
        </>
    )
}