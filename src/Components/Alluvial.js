import React from "react";

export default function Alluvial(){
    return(
        <>

        <div className="choose">

        <div className="container">
            <div className="row">
            <div className="container1 mt-10" style={{marginBottom: "6rem"}}>
            <h1  className="text-center" style={{color: "white"}}>Alluvial Soil</h1>
            <h2 className="text-center" style={{color: "white"}}>Suitable Plantations For Alluvial Soil</h2>
            </div>
               <div className="col-md-8">
                  <div className="titlepage">
                     
                  </div>
               </div>
            </div>
         </div>

            <div style={{padding: "20px"}} className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card" style={{backgroundColor:"#f4cb1e"}}>
      <img style={{padding:"10px",height: "400px",width: "725px",paddingLeft: "15px"}} src="sugarcane.jpg" className="card-img-top" alt="cotton"/>
      <div className="card-body">
        <h5 style={{color:"black"}}  className="card-title">Sugarcane</h5>
        <p> <span style={{color:"black",fontWeight:"bold"}} className="card-text">Best Season for plantation: </span><span style={{fontWeight:"620"}}>Autumn</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Time needed to grow: </span><span style={{fontWeight:"620"}}>12-16 months</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Season of Harvest: </span><span style={{fontWeight:"620"}}>Spring</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Fertilizer used: </span><span style={{fontWeight:"620"}}>Nitrogen</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Type of irrigation: </span><span style={{fontWeight:"620"}}>Drip</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Soil pH level: </span><span style={{fontWeight:"620"}}>6.5-7.5 </span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{backgroundColor:"#f4cb1e"}}>
      <img style={{padding:"10px",height: "400px",width: "725px",paddingLeft: "9px"}} src="tobacco.jpg" className="card-img-top" alt="Groundnuts"/>
      <div className="card-body">
        <h5 className="card-title">Tobacco</h5>
        <p> <span style={{color:"black",fontWeight:"bold"}} className="card-text">Best Season for plantation: </span><span style={{fontWeight:"620"}}>Autumn</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Time needed to grow: </span><span style={{fontWeight:"620"}}>12-16 months</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Season of Harvest: </span><span style={{fontWeight:"620"}}>Spring</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Fertilizer used: </span><span style={{fontWeight:"620"}}>Ammonium phosphate</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Type of irrigation: </span><span style={{fontWeight:"620"}}>Drip</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Soil pH level: </span><span style={{fontWeight:"620"}}>5.4-6</span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{backgroundColor:"#f4cb1e"}}>
      <img style={{padding:"10px",height: "400px",width: "725px",paddingLeft: "9px"}} src="tomato.jpeg" className="card-img-top" alt="wheat"/>+
      <div className="card-body">
        <h5 className="card-title">Tomato</h5>
        <p> <span style={{color:"black",fontWeight:"bold"}} className="card-text">Best Season for plantation: </span><span style={{fontWeight:"620"}}>Rainy</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Time needed to grow: </span><span style={{fontWeight:"620"}}>60-100 days</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Season of Harvest: </span><span style={{fontWeight:"620"}}>Summer</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Fertilizer used: </span><span style={{fontWeight:"620"}}>Lower nitrogen and higher phosphorus</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Type of irrigation: </span><span style={{fontWeight:"620"}}>Drip</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Soil pH level: </span><span style={{fontWeight:"620"}}>6.2-6.8</span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{backgroundColor:"#f4cb1e",height: "730px"}}>
      <img style={{padding:"10px",height: "400px",width: "725px",paddingLeft: "9px"}} src="potato1.jpg" className="card-img-top" alt="jowar"/>
      <div className="card-body">
        <h5 className="card-title">Potato</h5>
        <p> <span style={{color:"black",fontWeight:"bold"}} className="card-text">Best Season for plantation: </span><span style={{fontWeight:"620"}}>Autumn</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Time needed to grow: </span><span style={{fontWeight:"620"}}>60-90 days</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Season of Harvest: </span><span style={{fontWeight:"620"}}>Rainy</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Fertilizer used: </span><span style={{fontWeight:"620"}}>Nitrogen, Phosphorus amd Potassium</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Type of irrigation: </span><span style={{fontWeight:"620"}}>Sprinkler</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Soil pH level: </span><span style={{fontWeight:"620"}}>6-6.5</span></p>
      </div>
    </div>
  </div>
</div>
</div>
        </>
    )
}