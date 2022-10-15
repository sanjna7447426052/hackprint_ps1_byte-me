import React from "react";
import './Products.css';
import { NavLink } from "react-router-dom";

export default function Products(){
    return (
    <>
         <div className="product">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="titlepage">
                     <h2>Types Of Soil</h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="row">
               <div className="col">
                  <div className="product_box">
                     <figure>
                     <NavLink to="/Alluvial">
                     <img src="AlluSoil.jpg" alt="#"/>
                     </NavLink>
                     </figure>
                     <h3>Alluvial Soil</h3>
                     
                  </div>
               </div>
         
               <div className="col">
                  <div className="product_box">
                     <figure>
                     <NavLink to="/Laterite">
                     <img src="laterateSoil.jpg" alt="#"/>
                     </NavLink>
                     </figure>
                     <h3>Laterite Soil</h3>
                  </div>
               </div>
               <div className="w-100"></div>
               <div className="col">
                  <div className="product_box">
                  <figure>
                  <NavLink to="/Redsoil">
                  <img src="redSoil.jpg" alt="#"/>
                  </NavLink>
                  </figure>
                     <h3>Red Soil</h3>
                  </div>
               </div>
               <div className="col">
                  <div className="product_box">
                  <figure>
                  <NavLink to="/Soildata">
                   <img src="blackSoil.jpg" alt="#"/>
                   </NavLink>
                   </figure>
                   
                     <h3>Black Soil</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
    )
}