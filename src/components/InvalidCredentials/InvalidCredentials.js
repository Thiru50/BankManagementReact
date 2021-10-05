import React,{useHistory} from 'react'
import './InvalidCredentials.css'
import Button from '@material-ui/core/Button'
import VpnKey from '@material-ui/icons/VpnKey'
import { Link, withRouter } from "react-router-dom";
function InvalidCredentials(props) {
   const redirectToLogin=()=>{
       props.history.push("/login")
   }
    const redirectToRegister=()=>{
        props.history.push("/register")
    }
    return (
        <div className="Idiv">
        <div className="Ilogincont">
      <div className="card col-12 col-lg-4 login-card mt-2 Ibox"
      style={{
          "width":"600px"
      }}
     >
        <div className="Iformdiv">
     <div>
         <div
         style={{
             "textAlign":"center",
             "color":"red"
         }}
         > <h1>Oops! Login failed.</h1></div>
         <div
          style={{
            "textAlign":"center",
           
        }}
         ><h5>Invalid customer Id or password!! Try again.</h5></div>
         <div
          style={{
            "textAlign":"center"
        }}
         ><h6>Not a registered user? then Register.</h6></div>
         <div
         style={{
             "margin-top":"30px"
         }}>
         <Button 
         style={{
             "width":"140px"
         }}
            variant="contained"
            color="primary"
              type="submit" 
              endIcon={<VpnKey/>}
              onClick={()=>redirectToLogin()}
          >Login</Button>
          <Button 
          style={{
              "float":"right",
              "width":"140px"
          }}
            variant="contained"
            color="primary"
              type="submit" 
              onClick={()=>redirectToRegister()}
          >Register</Button>
         </div>
     </div>
      </div>
  </div>
  </div>
  </div>
    )
}

export default withRouter(InvalidCredentials);
