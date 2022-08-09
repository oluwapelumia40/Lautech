import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

export default function Footer() {
  return (
    <div>
        <div className="footerBottom">
                        <div className="footer1">
                                <div className="col1"> 
                                    The philosophy of the LODLC is focused on how to open up access to high quality, international standard and appropriate education in a setting that is flexible, open, and civilized. 
                                </div>
                                
                                <div className="col2">
                                    <p> Useful Links </p>
                                    <Link to="#" className='trans-link'> Transcript </Link>
                                </div>
                                <div className="col3">
                                    <Link to="#"> Student verification </Link>
                                </div>
                                    <div className="col4">
                                        <h5> Information</h5> 
                                        <p> Ladoke Akintola University of Technology. Along Oyo, Ilorin Road, 210214, Ogbomosho, Oyo state. </p>
                                                  <Link to="#"> +234 809 468 9329 </Link>
                                        <br></br> <Link to="#"> +234 805 304 8767 </Link> 
                                        <br></br> <Link to="#"> helpdesk@lautech.edu.ng </Link>
                                    </div>
                        </div>
                        <div className="footer2">
                           <p> © 2022 All Right Reserved Ladoke Akintola University of Technology - Open and Distance Learning </p> 
                        </div>
                    </div>
    </div>
  )
}
