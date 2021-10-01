import React, {useState} from 'react';
import l from './LoginForm.module.css';
import Button from '@material-ui/core/Button'
import VpnKey from '@material-ui/icons/VpnKey'
import { withRouter } from "react-router-dom";

function LoginForm(props) {
    const [state , setState] = useState({
        userId : "",
        password : "",
    })
    const redirectToRegister = () => {
        props.history.push('/register'); 
    }
    const redirectToHome = () => {
      props.history.push('/home'); 
  }
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    } 
    return(
      <div className={`container ${l.logincont}`}>
      <div className="card col-12 col-lg-4 login-card mt-2"
     >
        <div className={l.formdiv}>
      <form>
          <div className="form-group text-left ">
              
          <label htmlFor="userId">User ID</label>
         <input 
          type="text" 
                 className={`form-control ${l.loginbox}`} 
                 id="userId" 
                 placeholder="Enter User ID" 
                 value={state.userId} 
                 onChange={handleChange}
          />
          </div>
          <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" 
                 className="form-control" 
                 id="password" 
                 placeholder="Password"
                 value={state.password}
                 onChange={handleChange} 
          /> 
          </div>
          <Button 
          className={l.submitBtn}
            variant="contained"
            color="primary"
              type="submit" 
              endIcon={<VpnKey/>}
              onClick={() => redirectToHome()}
          >Login</Button>
      </form>
      
      <div className={l.registerMessage}>
          <span>Dont have an account? </span>
          <span  className={l.loginText} onClick={() => redirectToRegister()}>Register</span> 
      </div>
      </div>
  </div>
  </div>
    )
}

export default withRouter(LoginForm);