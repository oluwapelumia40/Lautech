import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Topbar from "./Component/Topbar/Topbar";
import UsePagination from "./Component/usePagination/UsePagination";
import UsePagination1 from "./Component/usePagination/UsePagination1";
import UsePagination2 from "./Component/usePagination/UsePagination2";
import "./style.css"

function Admission () {

    const [btn1, setBtn1] = useState (true)
    const [btn2, setBtn2] = useState (false)
    const [btn3, setBtn3] = useState (false)

    const showCont1 = () => {
        setBtn1 (true)
        setBtn2 (false)
        setBtn3 (false)
    }
    const showCont2 = () => {
        setBtn1 (false)
        setBtn2 (true)
        setBtn3 (false)
    }
    const showCont3 = () => {
        setBtn1 (false)
        setBtn2 (false)
        setBtn3 (true)
    }

    return (
        <div className="admission">
            <Topbar />
            <div className="container">
                <div className="content">
                    <h3>ADMISSION INTO OPEN AND DISTANCE LEARNING (ODL) DEGREE PROGRAMMES FOR THE 2022/2023 ACADEMIC SESSION</h3>
                    <p>Applications are hereby invited from qualified candidates into the ODL Bachelor’s Degree Programmes in the Open and Distance Learning Centre of Ladoke Akintola University of Technology, Ogbomoso for the 2020/2021 Academic Session.</p>
                        <h6>IMPORTANT NOTICE ON ADMISSION REQUIREMENTS</h6>
                     <p>Candidates who participated in the 2020/2021 UTME examination and scored 180 and above may also be considered for admission irrespective of their choice of institution.</p>
                        <h6> COMPUTER PROFICIENCY TRAINING </h6>
                    <p> Computer proficiency training and test will be conducted for all applicants. </p>
                        <h6> METHOD OF APPLICATION: </h6>
                   <div className="list">
                   <ol>
                        <li> Application forms are available on-line on payment of Application and Computer Training fee of ₦12,500.00 only. </li>
                        <li> Candidates are expected to register on the Centre’s website; <Link to="/homePage"> lodlc.lautech.edu.ng</Link> by completing and submitting the on-line application form. </li>
                        <li> In completing the on-line application form, candidates are required to upload a scanned passport photograph with white background showing ears, no cap and no glasses. The scanned passport photograph must be in JPEG format (i.e. jpg) and must not be more than 20kb. On submission of the application form, candidates are to print out Referee Form. </li>
                    </ol>
                   </div>
                   <div className="row">
                       <div className="col-md-8 contact">
                           <h6> HELP LINES/ENQUIRIES </h6>
                           <p> E-mail: lodlc@lautech.edu.ng </p>
                           <p> Mobile: +234 816 774 4969, +234 809 468 9329, +234 703 505 0757 and +234 805 304 8767 </p>
                       </div>
                       <div className="col-md-4">
                           <button type="submit" className="applyNow"> Apply Now </button>
                       </div>
                   </div>
                    </div>

                    <div className="useOfPagination">
                        <button type="submit" onClick={() => {showCont1()}} className={`years ${btn1 && "yearsActive"}`}> Four (4) Years Duration </button>
                        <button type="submit" onClick={() => {showCont2()}} className={`years ${btn2 && "yearsActive"}`}> Four (3) Years Duration</button>
                        <button type="submit" onClick={() => {showCont3()}} className={`years ${btn3 && "yearsActive"}`}> Four (2) Years Duration</button>
                    </div>
                    <div>
                        {btn1 && <UsePagination/>}
                        {btn2 && <UsePagination1/>}
                        {btn3 && <UsePagination2/>}
                    </div>
            </div>    
            <Footer/>
        </div>
    )
}

export default Admission