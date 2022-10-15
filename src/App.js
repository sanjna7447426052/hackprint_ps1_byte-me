import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Data from './Components/Data';
import {Routes,Route} from 'react-router-dom'
import Products from './Components/Products';
import Soildata from './Components/Soildata';
import Alluvial from './Components/Alluvial';
import Laterite from './Components/Laterite';
import Redsoil from './Components/Redsoil';


function App() {
  return (
    <>
<Navbar/>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/Data" element={<Data/>}/>
<Route exact path="/Soildata" element={<Soildata/>}/>
<Route exact path="/Alluvial" element={<Alluvial/>}/>
<Route exact path="/Laterite" element={<Laterite/>}/>
<Route exact path="/Redsoil" element={<Redsoil/>}/>
<Route exact path="/Products" element={<Products/>}/>
<Route exact path="/Footer" element={<Footer/>}/>
</Routes>

    </>
  );
}

export default App;
