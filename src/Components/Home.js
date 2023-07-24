import React from "react"
import web from "./Images/About.jpeg"
import Common from "./Common"
const Home=()=>{
    return(<>
        <Common
            name="Grow Your Knowledge About Crypto With" 
            imgsrc={web} 
            visit="/services"
            btname="Get Started"
        />
    </>)
}

export default Home