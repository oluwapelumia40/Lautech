import React from "react";
import { ReactDOM } from "react";
import "./style.css"
import Topbar from "./Component/Topbar/Topbar";
import Footer from "./Component/Footer/Footer";

function Campus (){
    return (
        <div className="campus">
            <Topbar />
            
            <Footer />
        </div>
        
    )
}

export default Campus