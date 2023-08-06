import React from "react"
// import { NavLink } from "react-router-dom";
import "./Card.css"
const Card=({img,title,price,symbol,website})=>{
    return (
        <div className="coin">
            <h1> Name: {title}</h1>
            <img src={img} />
            <h3> Price: {price}</h3>
            <h3> Symbol: {symbol}</h3>
            <a href={website} target="_new" class="btn btn-primary">Know More</a>
        </div>
    )
}
export default Card;