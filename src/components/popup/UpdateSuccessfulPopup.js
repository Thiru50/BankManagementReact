import React from 'react'
import './UpdateSuccessfulPopup.css'
import { withRouter } from "react-router-dom";
function UpdateSuccessfulPopup(props) {
    const redirectToHome = () => {
        props.history.push('/home'); 
    }
    return (props.trigger)? (
        <div>
            <div className="popup">
                <div className="popup-inner">
                <h3 style={{"color":"white"}}>Details updated succesfully!!</h3><br></br>
                    <button className="btn btn-primary close-btn"
                    onClick={()=>redirectToHome()}
                    >Back to home</button>
                    {props.children}
                </div>
            </div>
        </div>
    ):"";
}

export default withRouter(UpdateSuccessfulPopup)
