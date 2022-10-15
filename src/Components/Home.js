import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import './Home.css';
import Products from "./Products";
import Soildata from "./Soildata";
export default function Home(){
    return(
        <>
       <section className="banner_main">
         <div className="container">
            <div className="row">
               <div className="col-md-12 ">
                  <div className="text-bg">
                     <h1>FARM WISE </h1>
                     <p>These days everything is possible with a click of a button. So we thought why not make farming easier than before with a click of a button? Here we present to you, a user friendly platform providing farming and harvesting information depending on soil and weather conditions!</p>
                     <NavLink to="/Products">Discover</NavLink>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <div className="three_box">
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <div className="box_text">
                     <figure><img src="homeimg.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="box_text">
                     <figure><img src="img2.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="box_text">
                     <figure><img src="img3.jpg" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div  class="hottest">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-5">
                  <div class="titlepage">
                     <h2>World’s Best destination<br/>For farmers</h2>
                  </div>
               </div>
               <div class="col-md-7">
                  <div class="hottest_box">
                     <p>We provide world class assistance for local, seasonal harvest for farmers. With entering your local conditions and providing us with an input, we will suggest you the crop type upi vould harvest for the best results. Join us for best harvest mission with a click by creating an account. Login for further details about your harvest thta we've suggested! </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <Products/>
      {/* <Soildata/> */}
      <Footer/>

    
      

      

        </> 
    )
}