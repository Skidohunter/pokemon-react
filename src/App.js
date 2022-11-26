import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import './assets/css/index.scss';
import Home from "./components/pages/Home";
import Pokemons from "./components/pages/Pokemons";
import Error404 from "./components/pages/Error404";
import Arrayjson from "./components/pages/Arrayjson";
import Type from "./components/pages/Type";

const App = () => {
  return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pokemons" element={<Pokemons/>}/>
        <Route path="/Arrayjson" element={<Arrayjson/>}/>
        <Route path="/Type" element ={<Type/>}/>
        <Route path="*" element={<Error404/>}/>
        
      </Routes>
    </BrowserRouter>

  </div>
  )
}




export default App;