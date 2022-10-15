import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){
    return (
        <>


            <header>
         <div className="header sticky">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">
                           <NavLink to="/" className="navbar-brand">
                <h1 className="m-0 display-4 text-uppercase text-white"><i className="bi bi-building text-primary me-2"></i>Farm Wise</h1>
            </NavLink>

                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 sticky">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                 <NavLink className="nav-link" to="/">Home</NavLink>
                              </li>
                              <li className="nav-item">
                                 <NavLink className="nav-link" to="/Soildata">About</NavLink>
                              </li>
                              <li className="nav-item">
                                 <NavLink className="nav-link" to="/Products">Types Of Soils</NavLink>
                              </li>
                              {/* <li className="nav-item">
                                 <a className="nav-link" href="blog.html">Blog</a>
                              </li> */}
                              {/* <li className="nav-item">
                                 <NavLink className="nav-link" to="/Footer">Contact</NavLink>
                              </li> */}
                              <li className="nav-item d_none">
                                 <a className="nav-link" href="#"><i className="fa fa-search" aria-hidden="true"></i></a>
                              </li>
                              <li className=" d_none get_btn">
                                 <NavLink style={{color: "black",textDecoration: "none"}} to="/Footer">Contact Us</NavLink>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
        </>
    )
}