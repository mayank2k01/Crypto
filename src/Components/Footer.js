import React from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
  } from "react-icons/fa";
const Footer=()=>{
    return(<>
        <div className='container-fluid footer'>
            <div className='row'>
            {/* <div className='col-md-6 col-12 mx-auto'> */}
                <footer className='text-center'>
                    <p style={{color:"white", marginTop:"5px"}}>@copy Copyright| All Rights Reserved</p>
                </footer>
            {/* </div> */}
            </div>
            </div>
        {/* <div className='temp'>
                    <ul className="social-media-desktop">
                        <li>
                        <a
                            href="https://www.facebook.com"
                            target="_New">
                            <FaFacebookSquare className="facebook" />
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://www.instagram.com/o_bishal_o/"
                            target="_New">
                            <FaInstagramSquare className="instagram" />
                        </a>
                        </li>
                    </ul> */}
                {/* <footer className='text-center w-100'>
                    <p>@copy Copyright| All Rights Reserved</p>
                </footer> */}
        {/* </div> */}
    </>)
}

export default Footer;