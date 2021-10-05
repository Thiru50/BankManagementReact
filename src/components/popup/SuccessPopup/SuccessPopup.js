import React,{useState} from 'react'
import './SuccessPopup.css'
import { withRouter } from "react-router-dom";
import { lightBlue } from '@material-ui/core/colors';
function SuccessPopup(props) {
    const redirectToHome = () => {
        props.history.push('/home'); 
    }
    return (props.trigger)? (
        <div>
            <div className="popup">
                <div className="popup-inner">
                <h3 style={{"color":"yellow"}}>{props.message}</h3><br></br>
                    <button className="btn btn-primary close-btn"
                    style={{"backgroundColor":lightBlue}}
                    onClick={()=>redirectToHome()}
                    >Back to home</button>
                    {props.children}
                </div>
            </div>
        </div>
    ):"";
}
export default withRouter(SuccessPopup)
