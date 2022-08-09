import React from "react"
import {Link} from "react-router-dom"
import Footer from "./Component/Footer/Footer"
import Topbar from "./Component/Topbar/Topbar"
import "./style.css"

function Home (){
return ( 
    <div className="home">
        <Topbar />

            <div className="homeImage">
                <img src="/image/schools.jpg" alt="School building"/>
            </div>

        <Footer/>
    </div>
    )
}

export default Home