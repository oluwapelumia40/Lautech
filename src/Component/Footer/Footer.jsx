import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

export default function Footer() {
  return (
    <div>
        <div className="footerBottom">
                        <div className="footer1">
                            <div className="row">
                                <div className="col-sm-4 firstText"> 
                                    The philosophy of the LODLC is focused on how to open up access to high quality, international standard and appropriate education in a setting that is flexible, open, and civilized. 
                                </div>
                                
                                <div className="col-sm-2">
                                    <h5> Useful Links </h5>
                                    <br></br><Link to="#"> Transcript </Link>
                                </div>
                                <div className="col-sm-2">
                                    <br></br><br></br><Link to="#"> Student verification </Link>
                                </div>
                                    <div className="col-sm-4">
                                        <h5> Information</h5> 
                                        <p> Ladoke Akintola University of Technology. Along Oyo, Ilorin Road, 210214, Ogbomosho, Oyo state. </p>
                                                  <Link to="#"> +234 809 468 9329 </Link>
                                        <br></br> <Link to="#"> +234 805 304 8767 </Link> 
                                        <br></br> <Link to="#"> helpdesk@lautech.edu.ng </Link>
                                    </div>
                            </div>
                        </div>
                        <div className="footer2">
                           <p> © 2022 All Right Reserved Ladoke Akintola University of Technology - Open and Distance Learning </p> 
                        </div>
                    </div>
    </div>
  )
}
