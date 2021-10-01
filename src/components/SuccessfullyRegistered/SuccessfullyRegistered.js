import React, {useState} from 'react';
import './SuccessfullyRegistered.css';

import { withRouter } from "react-router-dom";

function SuccessfullyRegistered(props) {
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }       
    const [state , setState] = useState({
        userName:window.sessionStorage.getItem("firstName"),
        customerId : window.sessionStorage.getItem("customerId"),
        accNumber : window.sessionStorage.getItem("accountNumber"),
    })
    const redirectToLogin = () => {
        window.sessionStorage.clear();
        props.history.push('/login'); 
    }
    return (
        <div className="Sregdiv"
        >
            <div>
    <div className="container login-cont">
    <div className="form-div">
    <form>
    <div className="form-group text-left">
          <label style={{"color":"white"}}  htmlFor="userId">Your User name is</label>
          <input type="text" 
                 className="form-control" 
                 id="userName" 
                 value={state.userName}
                 onChange={handleChange}
                 disabled
          /> 
          </div>
          <div className="form-group text-left">
          <label style={{"color":"white"}} htmlFor="customerId">Your Customer Id is</label>
          <input type="text" 
                 className="form-control" 
                 id="customerId" 
                 value={state.customerId}
                 onChange={handleChange}
                 disabled
          />
          </div>
          <div className="form-group text-left">
          <label style={{"color":"white"}} htmlFor="accNumber">Your account number is</label>
          <input type="number" 
                 className="form-control" 
                 id="accNumber" 
                 disabled
                 value={state.accNumber}
                 onChange={handleChange} 
          />
          </div>
          <button 
              type="submit" 
              className="btn btn-primary submitBtn"
              onClick={() => redirectToLogin()}
          >Login to continue</button>
      </form>
    </div>
    </div>
    </div>
     </div>
    );
}
export default withRouter(SuccessfullyRegistered);