import React from 'react'
import './NavBar.css'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router'
function NavBar(props) {
  let history=useHistory();
  const Logout=()=>{
    window.localStorage.clear()
    history.push("/")
  }
  let HomeNavBgcolor=""
  let UpNavBgcolor="" 
  let EdNavBgColor=""
  let PerNavBgColor=""
  let homeColor=""
  let edColor=""
  let perColor=""
  let upColor=""
  const currentPage=history.location.pathname;
  if (currentPage=='/home'){
     HomeNavBgcolor="rgb(148, 145, 145)"
     UpNavBgcolor=""
     EdNavBgColor=""
     PerNavBgColor=""
     homeColor="yellow"
     edColor=""
     perColor=""
     upColor=""

  }
  if (currentPage=='/UpdateDetails'){
    HomeNavBgcolor=""
     UpNavBgcolor="rgb(148, 145, 145)"
     EdNavBgColor=""
     PerNavBgColor=""
     homeColor=""
     edColor=""
     perColor=""
     upColor="yellow"
 }
 if (currentPage=='/EducationalLoan'){
     HomeNavBgcolor=""
     UpNavBgcolor=""
     EdNavBgColor="rgb(148, 145, 145)"
     PerNavBgColor=""
     homeColor=""
     edColor="yellow"
     perColor=""
     upColor=""
}
if (currentPage=='/PersonalLoan'){
    HomeNavBgcolor=""
     UpNavBgcolor=""
     EdNavBgColor=""
     PerNavBgColor="rgb(148, 145, 145)"
     homeColor=""
     edColor=""
     perColor="yellow"
     upColor=""
}


    return (
        <div>
            <div id="menu-nav">
  <div id="navigation-bar">
    <ul>
      <li style={{"backgroundColor":HomeNavBgcolor,"borderRadius":"45px 20px"}} ><a href="/home" ><i class="fa fa-home" style={{color:homeColor}}></i><span style={{color:homeColor}}>Home</span></a></li>
      <li style={{"backgroundColor": EdNavBgColor,"borderRadius":"45px 20px"}} ><a href="/EducationalLoan"><i class="fa fa-bank" style={{color:edColor}}></i><span style={{color:edColor}}>Educational Loan</span></a></li>
      <li style={{"backgroundColor": PerNavBgColor,"borderRadius":"20px 45px"}} ><a href="/PersonalLoan"><i class="fa fa-bank" style={{color:perColor}}></i><span style={{color:perColor}}>Personal Loan</span></a></li>
      <li style={{"backgroundColor":UpNavBgcolor,"borderRadius":"20px 45px"}} ><a  href="/UpdateDetails" ><i class="fa fa-edit" style={{color:upColor}}></i><span style={{color:upColor}}>Update details</span></a></li>
   <Button 
   style={{
    "margin-top": "15px",
    "float": "right",
    "margin-right": "20px"
   }}
   variant="contained"
   color="secondary"
     type="submit"
     onClick={()=>Logout()} 
   >Logout</Button>
    </ul>
  </div>
        </div>
        </div>
    )
}
export default NavBar
