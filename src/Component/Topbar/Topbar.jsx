import { Link } from "react-router-dom"
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="container-fluid">
        <div className="row">
        <div className="col-md-12 marg">
            <div className="headerWrapper">
                    <div className="headerContact">
                        <Link to="#">
                        +2347039131188, +2347037441855, +2349052939810, +2348167744969, +2348094689329, +2347035050757, +2348064240134, +2348034102918 |
                        </Link>
                        <Link to="#" className="contactEmail"> helpdesk@lautech.edu.ng </Link>
                     </div>  
                    <div className="headerApply">
                        <Link   Link to ="/apply" className="applyContact"> APPLY NOW</Link>
                    </div> 
             </div>
            < div className="header">
                <div className="row col-sm-12">
                    <div className="col-sm-3">
                    <Link to="#"> <img src="/logo/logo.png" className="img"/> </Link>
                    </div>
                    <div className="col-sm-9 menu">
                        <Link to="/" className={`${window.location.pathname === "/" ?"active" : " "}`}> HOMEPAGE </Link>
                        <Link to="/about" className={`${window.location.pathname === "/about" ? "active" : " "}`}> ABOUT </Link> 
                        <Link to="/admission" className={`${window.location.pathname === "/admission" ? "active" : " "}`}> ADMISSION </Link>
                        <Link to="/portal" className={`${window.location.pathname === "/portal" ? "active" : " "}`}> PORTAL </Link>
                        <Link to="/campus" className={`${window.location.pathname === "/campus" ? "active" : " "}`}> CAMPUS </Link>
                        <Link to="/contact" className={`${window.location.pathname === "/contact" ? "active" : " "}`}> CONTACT </Link>
                        
                    </div>
            </div>
           
        </div>
    
    </div>
        </div>
    </div>
  )
}
