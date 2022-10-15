import React from "react";

export default function Soildata(){
    return(
        <>

        <div className="choose">

        <div className="container">
            <div className="row">
            <div className="container1 mt-10" style={{marginBottom: "6rem"}}>
            <h1  className="text-center" style={{color: "white"}}>Black Soil</h1>
            <h2 className="text-center" style={{color: "white"}}>Suitable Plantations For Black Soil</h2>
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
      <img style={{padding:"10px",height: "400px",width: "725px",paddingLeft: "15px"}} src="blackSoilCott.jpeg" className="card-img-top" alt="cotton"/>
      <div className="card-body">
        <h5 style={{color:"black"}}  className="card-title">Cotton</h5>
        <p> <span style={{color:"black",fontWeight:"bold"}} className="card-text">Best Season for plantation: </span><span style={{fontWeight:"620"}}>Spring</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Time needed to grow: </span><span style={{fontWeight:"620"}}>6-8 months</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Season of Harvest: </span><span style={{fontWeight:"620"}}>Winter</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Fertilizer used: </span><span style={{fontWeight:"620"}}>Nitrogen, Phosphorus, Potassium</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Type of irrigation: </span><span style={{fontWeight:"620"}}>Drip and Sprinkler Irrigation</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Soil pH level: </span><span style={{fontWeight:"620"}}>5-5.8</span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{backgroundColor:"#f4cb1e",height:"730px"}}>
      <img style={{padding:"10px",height: "400px",width: "725px",paddingLeft: "9px"}} src="blackSoilNuts.jpeg" className="card-img-top" alt="Groundnuts"/>
      <div className="card-body">
        <h5 className="card-title">Groundnuts</h5>
        <p> <span style={{color:"black",fontWeight:"bold"}} className="card-text">Best Season for plantation: </span><span style={{fontWeight:"620"}}>Rainy</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Time needed to grow: </span><span style={{fontWeight:"620"}}>110-120 days</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Season of Harvest: </span><span style={{fontWeight:"620"}}>Winter</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Fertilizer used: </span><span style={{fontWeight:"620"}}>Ammonium, Nitrate and Urea</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Type of irrigation: </span><span style={{fontWeight:"620"}}>Life Irrigation</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Soil pH level: </span><span style={{fontWeight:"620"}}>5.7-6.3</span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{backgroundColor:"#f4cb1e"}}>
      <img style={{padding:"10px",height: "400px",width: "725px",paddingLeft: "9px"}} src="blackSoilWheat.jpg" className="card-img-top" alt="wheat"/>
      <div className="card-body">
        <h5 className="card-title">Wheat</h5>
        <p> <span style={{color:"black",fontWeight:"bold"}} className="card-text">Best Season for plantation: </span><span style={{fontWeight:"620"}}>Spring and Autumn</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Time needed to grow: </span><span style={{fontWeight:"620"}}>7-8 months</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Season of Harvest: </span><span style={{fontWeight:"620"}}>Rainy</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Fertilizer used: </span><span style={{fontWeight:"620"}}>Nitrogen, Phosphorus and Potassium</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Type of irrigation: </span><span style={{fontWeight:"620"}}>Drip irrigation</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Soil pH level: </span><span style={{fontWeight:"620"}}>6-6.8</span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{backgroundColor:"#f4cb1e"}}>
      <img style={{padding:"10px",height: "400px",width: "725px",paddingLeft: "9px"}} src="blackSoilJowar.jpg" className="card-img-top" alt="jowar"/>
      <div className="card-body">
        <h5 className="card-title">Jowar</h5>
        <p> <span style={{color:"black",fontWeight:"bold"}} className="card-text">Best Season for plantation: </span><span style={{fontWeight:"620"}}>Winter</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Time needed to grow: </span><span style={{fontWeight:"620"}}>65-75 days</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Season of Harvest: </span><span style={{fontWeight:"620"}}>Summer</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Fertilizer used: </span><span style={{fontWeight:"620"}}>Nitrogen, Phosphorus and Potassium</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Type of irrigation: </span><span style={{fontWeight:"620"}}>Minimal</span></p>
        <p><span style={{color:"black",fontWeight:"bold"}} className="card-text">Soil pH level: </span><span style={{fontWeight:"620"}}>5-5.8</span></p>
      </div>
    </div>
  </div>
</div>
</div>
        </>
    )
}