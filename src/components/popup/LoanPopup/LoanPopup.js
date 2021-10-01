import React,{useState} from 'react'
import './LoanPopup.css'
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button'


function LoanPopup(props) {
    const redirectToPersonalLoan = () => {
        props.history.push('/PersonalLoan'); 
    }
    const redirectToEducationalLoan = () => {
        props.history.push('/EducationalLoan'); 
    }
    return (props.trigger)? (
        <div>
            <div className="popup">
                <div className="popup-inner">
                <h3 style={{"color":"white"}}>Which type of Loan you want to take?</h3><br></br>
                    <Button className="btn btn-primary edLoanBtn"
                    variant="contained"
                    color="primary"
                    
                    onClick={()=>redirectToEducationalLoan()}
                    >Educational Loan</Button>
                    <Button className="btn btn-primary "
                    variant="contained"
                    color="primary"
                    style={{"margin-left": "30px"}}
                    onClick={()=>redirectToPersonalLoan()}
                    >Personal Loan</Button>
                    <Button className="btn  close-btn"
                    variant="contained"
                    color="primary"
                    style={{"background-color": "red"}}
                    onClick={()=>props.setTrigger(false)}
                    >Cancel</Button>
                    {props.children}
                </div>
            </div>
        </div>
    ):"";
}

export default withRouter(LoanPopup)
