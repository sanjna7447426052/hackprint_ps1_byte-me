import React from "react";
import './Footer.css';
import { NavLink } from "react-router-dom";
export default function Footer(){
    return(
        <>
            <footer id="contact">
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-md-4">
                     <div class="titlepage">
                        <h2>Contact Us</h2>
                     </div>
                  </div>
                  <div class="col-md-12">
                     <form id="request" class="main_form">
                        <div class="row">
                           <div class="col-md-3 ">
                              <input class="contactus" placeholder="Full Name" type="type" name="Full Name"/> 
                           </div>
                           <div class="col-md-3">
                              <input class="contactus" placeholder="Email" type="type" name="Email"/> 
                           </div>
                           <div class="col-md-3">
                              <input class="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>                          
                           </div>
                           <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                              <ul class="social_icon">
                                 <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                 <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                 <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                 <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                              </ul>
                           </div>
                           <div class="col-md-8">
                              <textarea class="contactus1" placeholder="Message" type="type" Message="Name">Message </textarea>
                           </div>
                           <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                              <button class="send_btn">Send</button>
                           </div>
                           
                        </div>
                     </form>
                  </div>
                  
                   <div class="col-md-3 border_right">
                     <ul class="location_icon">
                        <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i></a> Locations</li>
                        <li><a href="#"><i class="fa fa-volume-control-phone" aria-hidden="true"></i></a> All over India</li>
                        <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>Farm-Wise@gmail.com</li>
                     </ul>
                  </div>
                  
                  <div class="col-md-3 border_right">
                     <h3>Menus</h3>
                     <ul class="link">
<li><NavLink to="/">Home</NavLink></li>                             
<li><NavLink to="/Soildata">About</NavLink></li>                                                     
<li><NavLink to="/Products">Product</NavLink></li>                             
<li><NavLink to="/">Blog</NavLink></li>
<li><NavLink to="/Footer">Contact</NavLink></li>
                     </ul>
                  </div>
                  <div class="col-md-3">
                     <form class="bottom_form">
                        <h3>Newsletter</h3>
                        <input class="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <button class="sub_btn">subscribe</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </footer>
        </>
    )
}