import React, {useState} from 'react';
import h from './Home.module.css';
import { withRouter } from "react-router-dom";
import LoanPopup from '../popup/LoanPopup/LoanPopup';
import Button from '@material-ui/core/Button'
import { MdEdit} from "react-icons/md";
import { RiBankFill} from "react-icons/ri";
import NavBar from '../NavBar/NavBar';
function Home(props) {
    const [loanbuttonPopup,setLoanButtonPopup]=useState(false);
    const redirectToUpdateDetails = () => {
        props.history.push('/UpdateDetails'); 
    }
    const redirectToApplyingLoan = () => {
        console.log(props.history.location.pathname)
        setLoanButtonPopup(true)
    }
    // const fun=()=>{ 
    //     $("#navigation-bar").addClass("active")
    // } #to-do
   
    return ( 
        <div> 
            <NavBar/> 
            <div className={h.Hregdiv}>
        
        <div style={{
                "margin":"30px 50px",
        }}>
        <Button 
        variant="contained"
        color="primary"
        endIcon={<RiBankFill/>}
              type="submit" 
              className="btn btn-primary"
              onClick={() => redirectToApplyingLoan()}
          >Apply Loan</Button>
    
          <Button 
          variant="contained"
          color="primary"
          endIcon={<MdEdit/>}
              type="submit" 
              className="btn btn-primary updateBtn"
              style={{"float":"right"}}
              onClick={() => redirectToUpdateDetails()}
          >Edit details</Button>

          <LoanPopup trigger={loanbuttonPopup} setTrigger={setLoanButtonPopup}></LoanPopup>
    </div> 
    <div>
        <h1 style={{
            "color":"white",
            "textAlign":"center"
            }}>Bank Management</h1>
    </div>
    </div>
    </div>
    ) 
} 
export default withRouter(Home);