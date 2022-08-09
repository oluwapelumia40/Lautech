import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Topbar from "./Component/Topbar/Topbar";
import "./style.css"

function About (){
    return(
        <div className="about">
           <Topbar/>

            <div className="main"> 
                <div className="about-col1"> 
                <h1> ABOUT LAUTECH ODL</h1>
                <p> The philosophy of the LODLC is focused on how to open up access to high quality, international standard and appropriate education in a setting that is flexible, open, and civilized. To achieve this, only appropriate technology shall be deployed and a number of barriers to an engaging and satisfying learning experience will be minimized. </p>
                <Link to="#!" className="read-more1"> READ MORE </Link>
                </div>
                <div className="about-col2"> 
                <h1> ADMISSION INTO OPEN AND DISTANCE LEARNING (ODL) DEGREE PROGRAMMES FOR THE 2020/2021 ACADEMIC SESSION</h1>
                </div>
            </div>
           <Footer/>
        </div>


    )
}

export default About