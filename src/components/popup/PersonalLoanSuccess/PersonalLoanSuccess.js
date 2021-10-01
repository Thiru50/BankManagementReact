import React,{useState} from 'react'
import './PersonalLoanSuccess.css'
import { withRouter } from "react-router-dom";
function PersonalLoanSuccess(props) {
    const redirectToHome = () => {
        props.history.push('/home'); 
    }
    return (props.trigger)? (
        <div>
            <div className="popup">
                <div className="popup-inner">
                <h3 style={{"color":"white"}}>Personal Loan form submitted!!</h3><br></br>
                    <button className="btn btn-primary close-btn"
                    onClick={()=>redirectToHome()}
                    >Back to home</button>
                    {props.children}
                </div>
            </div>
        </div>
    ):"";
}

export default withRouter(PersonalLoanSuccess)
