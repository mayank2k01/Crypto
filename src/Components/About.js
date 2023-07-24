import React from "react"
import web from "./Images/Home.jpeg"
import Common from "./Common"
const About=()=>{
    return(<>
        <Common 
            name="If You Have Any Doubt Ask" 
            imgsrc={web} 
            visit="/contact"
            btname="Contact Now"
        />
    </>)
}

export default About