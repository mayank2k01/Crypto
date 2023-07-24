import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { Route,Routes, Redirect } from "react-router-dom";
import About from "./Components/About"
import Contact from "./Components/Contact"
import Services from "./Components/Services"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";


const App=()=>{
  return (<>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Redirect to="/"/> */}
      </Routes>
   
  </>
)}

export default App;