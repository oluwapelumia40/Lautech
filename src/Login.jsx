import React from "react"
import "./style.css"
import {Link} from "react-router-dom"

function Login (){
    return (
        <div className="fonter"> <br></br> 
            <div className="form">
                            <h4> Login to your account </h4> <br></br>
                        
                                <div className="regWrapper">
                                    <input type="email" className="form-control regInput" id="email" placeholder="Email Address"/>
                                </div>
                                <div className="regWrapper">
                                    <input type="password" className="form-control regInput" id="email" placeholder="Password"/>
                                </div>
                                <input type="checkbox"/> <label> Remember me </label> <label> <a href="#" className="forgetpass"> forget password </a> </label>
                            <div className="regWrapper">
                            <br></br><button type="submit" className="regButton"> Login </button> 
                            <Link to="/apply" className="regBut"> Create an account</Link>

                </div>
            </div>
         </div>

    )
}

export default Login