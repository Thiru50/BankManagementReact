import React from 'react'
import './NavBar.css'
import Button from '@material-ui/core/Button'
function NavBar() {
    return (
        <div>
            <div id="menu-nav">
  <div id="navigation-bar">
    <ul>
      <li ><a href="/home" ><i class="fa fa-home"></i><span>Home</span></a></li>
      <li ><a href="/EducationalLoan"><i class="fa fa-bank"></i><span>Educational Loan</span></a></li>
      <li ><a href="/PersonalLoan"><i class="fa fa-bank"></i><span>Personal Loan</span></a></li>
      <li><a  href="/UpdateDetails" ><i class="fa fa-edit"></i><span>Update details</span></a></li>
   <Button 
   style={{
    "margin-top": "15px",
    "float": "right",
    "margin-right": "20px"
   }}
   variant="contained"
   color="secondary"
     type="submit" 
   >Logout</Button>
    </ul>
  </div>
        </div>
        </div>
    )
}
export default NavBar
