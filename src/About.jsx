import React from "react";

import Footer from "./Component/Footer/Footer";
import Topbar from "./Component/Topbar/Topbar";
import "./style.css"

function About (){
    return(
        <div className="about">
           <Topbar/>

           <Footer/>
        </div>


    )
}

export default About