import React, { useEffect } from "react"
import {Link} from "react-router-dom"
import "./style.css"

function Apply (){
    return (
        <div className="fonter"> 
            <div className="form">
                <h4> Registration</h4>
                    <div className="regWrapper">
                        <input type="email" className="form-control regInput" id="emailaddress" placeholder="Email Address"/>
                    </div>
                    <div className="regWrapper">
                        <input type="text" className="form-control regInput" id="lastname" placeholder="Last Name"/>
                    </div>
                    <div className="regWrapper">
                        <input type="text" className="form-control regInput" id="firstname"  placeholder="First Name"/>
                    </div>
                    <div className="regWrapper">
                        <input type="text" className="form-control regInput" id="othername"  placeholder="Other Name"/>
                    </div>
                    <div className="regWrapper">
                        <input type="text" className="form-control regInput" id="phonenum"  placeholder="Phone Number"/>
                    </div>
                    <div className="regWrapper">
                        <input type="password" className="form-control regInput" id="Password" placeholder="password"/>
                    </div>
                    <div className="regWrapper">
                        <input type="password" className="form-control regInput" id="conPassword" placeholder="confirm password"/>
                    </div>
                    <div className="regWrapper">
                        <p className="message"> Already Registered? <a href="/login"> Login </a> </p>
                        <button type="submit" className="regButton" id="inputPassword"> Create </button><br></br>
                    </div>
            </div>
    </div>
        
    )
}

export default Apply