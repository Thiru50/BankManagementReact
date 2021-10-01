import React,{useState} from 'react'
import './EducationalLoanSuccess.css'
import { withRouter } from "react-router-dom";
function EducationalLoanSuccess(props) {
    const redirectToHome = () => {
        props.history.push('/home'); 
    }
    return (props.trigger)? (
        <div>
            <div className="popup">
                <div className="popup-inner">
                <h3 style={{"color":"white"}}>Educational Loan form submitted!!</h3><br></br>
                    <button className="btn btn-primary close-btn"
                    onClick={()=>redirectToHome()}
                    >Back to home</button>
                    {props.children}
                </div>
            </div>
        </div>
    ):"";
}

export default withRouter(EducationalLoanSuccess)
