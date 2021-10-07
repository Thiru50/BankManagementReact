import React, {useState} from 'react';
import l from './LoginForm.module.css';
import Button from '@material-ui/core/Button'
import VpnKey from '@material-ui/icons/VpnKey'
import { withRouter } from "react-router-dom";
import axios from 'axios';

function LoginForm(props) {
    const [state , setState] = useState({
        userId : "",
        password : "",
    })
    const redirectToRegister = () => {
        console.log(Date.now() / 1000)
        props.history.push('/register'); 
    }
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    } 
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("button clicked")
        if((state.userId!=="")&&(state.password!=="")){
            console.log("started")
            axios.post("https://localhost:44331/login",{
                customerId:state.userId,
                password:state.password,
            }).then((response)=>{
                window.localStorage.clear()
                console.log(response)
                window.localStorage.setItem("token",response.data.token)
                window.localStorage.setItem("customerId",response.data.user.customerId)
                window.localStorage.setItem("firstName",response.data.user.firstName)
                window.localStorage.setItem("lastName",response.data.user.lastName) 
                window.localStorage.setItem("password",response.data.user.password)
                window.localStorage.setItem("dob",response.data.user.dob)
                window.localStorage.setItem("gender",response.data.user.gender)
                window.localStorage.setItem("guardianType",response.data.user.guardianType)
                window.localStorage.setItem("guardianName",response.data.user.guardianName)
                window.localStorage.setItem("address",response.data.user.address)
                window.localStorage.setItem("citizenship",response.data.user.citizenship)
                window.localStorage.setItem("state",response.data.user.state)
                window.localStorage.setItem("country",response.data.user.country)
                window.localStorage.setItem("email",response.data.user.email)
                window.localStorage.setItem("maritalStatus",response.data.user.maritalStatus)
                window.localStorage.setItem("contactNumber",response.data.user.contactNumber)
                window.localStorage.setItem("registrationDate",response.data.user.registrationDate)
                window.localStorage.setItem("accountType",response.data.user.accountType)
                window.localStorage.setItem("branchName",response.data.user.branchName)
                window.localStorage.setItem("citizenStatus",response.data.user.citizenStatus)
                window.localStorage.setItem("ida",response.data.user.ida)
                window.localStorage.setItem("documentType",response.data.user.documentType)
                window.localStorage.setItem("idn",response.data.user.idn)
                window.localStorage.setItem("accHolderName",response.data.user.accHolderName)
                window.localStorage.setItem("accHolderAddress",response.data.user.accHolderAddress)
                window.localStorage.setItem("accHolderNumber",response.data.user.accHolderNumber)
                window.localStorage.setItem("accountNumber",response.data.user.accountNumber)
                  props.history.push("/home")
            }).catch(function (error)
            {   
                if(error.request){
                    if(error.request.status===401){
                    props.history.push('/InvalidCredentials')
                    console.log(error.request.status)
                    }
                    else{
                        props.history.push('/error')
                        console.log(error.request.status)
                    }
                }
                else{
                    props.history.push('/error')
                    console.log("something happened")
                }
            });
        }
        else{
            props.history.push('/login')
        }
    }
    return(
      <div className={`container ${l.logincont}`}>
      <div className="card col-12 col-lg-4 login-card mt-2"
     >
        <div className={l.formdiv}>
      <form onSubmit={submitHandler}>
          <div className="form-group text-left ">
              
          <label htmlFor="userId">User ID</label>
         <input 
          type="text" 
                 className={`form-control ${l.loginbox}`} 
                 id="userId" 
                 placeholder="Enter User ID" 
                 value={state.userId} 
                 onChange={handleChange}
                 required
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
                 required
          /> 
          </div>
          <Button 
          className={l.submitBtn}
            variant="contained"
            color="primary"
              type="submit" 
              endIcon={<VpnKey/>}
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