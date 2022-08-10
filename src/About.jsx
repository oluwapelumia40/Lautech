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
                    <p className="about-col2-text1"> ADMISSION INTO OPEN AND DISTANCE LEARNING (ODL) DEGREE PROGRAMMES FOR THE 2020/2021 ACADEMIC SESSION</p>
                    <p> Applications are hereby invited from qualified candidates into the ODL Bachelor’s Degree Programmes in the Open and Distance Learning Centre of Ladoke Akintola University of Technology, Ogbomoso for the 2020/2021 Academic Session. </p>
                    <p className="about-col2-text1"> IMPORTANT NOTICE ON ADMISSION REQUIREMENTS</p>
                    <p> Candidates who participated in the 2020/2021 UTME examination and scored 180 and above may also be considered for admission irrespective of their choice of institution. </p>
                    <p className="about-col2-text1"> COMPUTER PROFICIENCY TRAINING </p>
                    <p> Computer proficiency training and test will be conducted for all applicants.</p>
                    <Link to="#" className="read-more2"> READ MORE </Link>
                    </div>

            </div>

            <div> </div>
           <Footer/>
        </div>


    )
}

export default About