import React from "react"
// import { NavLink } from "react-router-dom";

const Card=(props)=>{
    return (<>
        <div className="col-md-4 col-10 mx-auto ">
            <div className="card bg-dark border border-primary text-light text-center ">
                <img  id="logo-image" className="img-responsive rounded-circle" src={props.img} alt="Logo"/>
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">Current price: {props.price} </p>
                    <a href={props.website} target="_New" className="btn btn-primary">Know More</a>
                </div>
            </div>
        </div>
    </>)
}
export default Card;