/* eslint-disable */
import React, {useState} from 'react';
import './UpdateDetails.css';
import SuccessPopup from '../popup/SuccessPopup/SuccessPopup';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button'
import { ImPencil} from "react-icons/im";
import Loading from '../Loading/Loading';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
function UpdateDetails(props) {
    const message="Details updated successfully!!"
    var date=new Date().toISOString().substr(0,10);
    let isRequired=true;
    const [buttonPopup,setButtonPopup]=useState(false);
    const [loading,setLoading]=useState(false)
    const [state , setState] = useState({
        name:window.localStorage.getItem("firstName"),
        userName:window.localStorage.getItem("lastName"),
        customerId:window.localStorage.getItem("customerId"),
        accNumber:window.localStorage.getItem("accountNumber"),
        password:window.localStorage.getItem("password"),
        gender:window.localStorage.getItem("gender"),   
        guardianType:window.localStorage.getItem("guardianType"),  
        guardianName:window.localStorage.getItem("guardianName"),
        address:window.localStorage.getItem("address"),
        citizenship:window.localStorage.getItem("citizenship"),
        state:window.localStorage.getItem("state"),
        country:window.localStorage.getItem("country"),
        email:window.localStorage.getItem("email"),
        maritalStatus:window.localStorage.getItem("maritalStatus"),
        contactNumber:window.localStorage.getItem("contactNumber"),
        dob:window.localStorage.getItem("dob"),
        registrationDate:date,
        accountType:window.localStorage.getItem("accountType"),
        branchName:window.localStorage.getItem("branchName"),
        citizenStatus:window.localStorage.getItem("citizenStatus"),
        ida :window.localStorage.getItem("ida"),
        documentType :window.localStorage.getItem("documentType"),
        idn :window.localStorage.getItem("idn"),
        accHolderName:window.localStorage.getItem("accHolderName"),
        accHolderNumber:window.localStorage.getItem("accHolderNumber"),
        accHolderAddress:window.localStorage.getItem("accHolderAddress"),
    })
   
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        })) 
    } 
    const submitHandler=(event)=>{
        event.preventDefault();
        if((nameValidate())&&(passwordValidate())&&(guardianNameValidate())
        &&(stateValidate())&&(countryValidate())&&(addressValidate())&&(emailValidate())
        &&(branchNameValidate())&&(citizenshipValidate())
        &&(accHolderNameValidate())&&(accHolderAddressValidate())&&(accHolderNumberValidate())
        &&(contactNumberValidate())&&(UserNameValidate())&&(idnValidate())){
            setLoading(true)
            console.log("https://localhost:44331/api/UserDetails/"+window.localStorage.getItem("customerId"))
            axios.put("https://localhost:44331/api/UserDetails/"+window.localStorage.getItem("customerId"),{
                customerId:window.localStorage.getItem("customerId"),
                firstName:state.name,
                lastName:state.userName,
                accountNumber:window.localStorage.getItem("accountNumber"),
                password:state.password,
                address:state.address,
                citizenship:state.citizenship,
                country:state.country,
                state:state.state,
                email:state.email,
                maritalStatus:state.maritalStatus,
                contactNumber:state.contactNumber,
                accountType:state.accountType,
                branchName:state.branchName,
                guardianType:state.guardianType,
                guardianName:state.guardianName,
                documentType:state.documentType,
                ida:state.ida,
                idn:state.idn,
                accHolderName:state.accHolderName,
                accHolderAddress:state.accHolderAddress,
                accHolderNumber:state.accHolderNumber,
                gender:window.localStorage.getItem("gender"),
                dob:window.localStorage.getItem("dob"),
                registrationDate:window.localStorage.getItem("registrationDate"),
                citizenStatus:window.localStorage.getItem("citizenStatus")
            }).then((response)=>{
                setLoading(false)
                console.log(response.data.customerId)
            }).catch(function (error)
            {   setLoading(false)
                if(error.request){
                     console.log(error);
                    props.history.push('/error')
                    console.log("server not reponsed")
                }
                else{
                    console.log("something happened")
                }
            });
        }
        setButtonPopup(true)
    }
    const nameValidate=()=>{
        if((state.name!==null) &&(state.name.search(/[^A-Za-z\s]/) !== -1)){
            return false
        }
        return true
    }
    const UserNameValidate=()=>{
        if((state.userName!==null) &&(state.userName.search(/[^A-Za-z\s]/) !== -1)){
            return false
        }
        return true
    }
    const passwordValidate=()=>{
        if((state.password!==null)&&(state.password.length>=8)){
            return true;
        }
        return false;
    } 
    const guardianNameValidate=()=>{
        if(state.guardianName.search(/[^A-Za-z\s]/) !== -1){
            return false
        }
        return true
    }
    const stateValidate=()=>{
        if(state.state.search(/[^A-Za-z\s]/) !== -1){
            return false
        }
        return true
    }
    const countryValidate=()=>{
        if(state.country.search(/[^A-Za-z\s]/) !== -1){
            return false
        }
        return true
    }
    const addressValidate=()=>{
        if(state.address.trim().length>0){
            return true
        }
        return false
    }   
    const emailValidate=()=>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email))
        {
            return true
        } return false
    }
    const citizenshipValidate=()=>{
        if(state.citizenship.search(/[^A-Za-z\s]/) !== -1){
            return false
        }
        return true
    }
    const branchNameValidate=()=>{
        if(state.branchName.search(/[^A-Za-z\s]/) !== -1){
            return false
        }
        return true
    }
   
    const accHolderNameValidate=()=>{
        if(state.accHolderName.search(/[^A-Za-z\s]/) !== -1){
            return false
        }
        return true
    }
    const accHolderAddressValidate=()=>{
        if(state.accHolderAddress.length>0){
            return true
        }
        return false
    }
    const contactNumberValidate=()=>{
        if(state.contactNumber.length!==10){
            return false
        }
        return true
    }
    const accHolderNumberValidate=()=>{
        if(state.accHolderNumber.length!==16){
            return false
        }
        return true
    }
    
    const pancardValidate=()=>{
        let reg=/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
           if(reg.test(state.idn)){
               return true
           }

        return false
}
    const aadharValidate=()=>{
        if(state.idn.length===12){
            if (!(isNaN(state.idn))){
                return true
            }
        }
        return false 
    }
    const idnValidate=()=>{
        if(((state.documentType==="pancard")&&(pancardValidate()))||((state.documentType==="aadhar")&&(aadharValidate()))){
            return true 
        }
        return false
    }
    
    
    return (
        (loading?<Loading/>
            :
            <div> <NavBar/>

        <div className="Uregdiv"
        >
            <div style={{
                "margin":"0 50px",
                

        }}>
        <div className="row">
            <div className="col">
                <div className="d-flex align-items-end justify-content-start h-100">
                    <h3 style={{"float":"left",color:'yellow',"margin-top":"20px"}}>Update Details</h3>
                </div>
            </div>
        </div>
        <form className="was-validated my-form" onSubmit={submitHandler}>
                <div className="row my-row">
                    <div className="col-lg-3 my-col "> 
                        <div className="form-group"> 
                            <label style={{"color":"white"}}  for="name">Full Name</label>
                            <input type="text"
                             value={state.name} onChange={handleChange}
                             name="name" 
                             id="name"
                             className="form-control" 
                             placeholder="Name"
                             required={isRequired}
                             style={{"backgroundColor":"darkgrey","color":"white"}}
                             disabled
                              />
                            
                        </div>
                        
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="userName">Last&nbsp;Name</label>
                            <input type="text"  name="userName" id="userName" className="form-control"
                             value={state.userName} onChange={handleChange}
                             placeholder="Last name"
                             
                             required={isRequired} style={{"backgroundColor":"darkgrey","color":"white"}}
                             disabled/>
                             
                            
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="password">Password</label>
                            <input type="password"  name="password"
                            value={state.password} onChange={handleChange}
                           
                             id="password" className="form-control" placeholder="Password" required={isRequired}/>
                              {(state.password===null||state.password===window.localStorage.getItem("password"))
                               ? null
                               : ((state.password.trim()==="")
                               ? (<small style={{"color":"red"}}>Password should not be Empty</small>)
                               : ((passwordValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Password length should be greater than 7</small>)
                               )))} 
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="gender">Gender</label>
                            <select name="gender" id="gender" value={state.gender} style={{"backgroundColor":"darkgrey","color":"white"}}
                             onChange={handleChange} className="form-control" disabled>
                                <option value="male">Male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row my-row">
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="customerId">Customer Id</label>
                            <input type="number" name="customerId" id="customerId" 
                            value={state.customerId} onChange={handleChange} 
                            className="form-control" placeholder="Customer Id"
                            required={isRequired}disabled style={{"backgroundColor":"darkgrey","color":"white"}} /> 
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="accNumber">Account number</label>
                            <input type="number" name="accNumber" id="accNumber" 
                            value={state.accNumber} onChange={handleChange} 
                            className="form-control" placeholder="Account Number"
                            required={isRequired}disabled  style={{"backgroundColor":"darkgrey","color":"white"}}/> 
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="address">Address</label>
                            <input type="text" name="address" id="address"
                             value={state.address} onChange={handleChange} 
                             className="form-control" placeholder="Address" required={isRequired}/>
                             {(state.address===null||state.address===window.localStorage.getItem("address"))
                               ? null
                               : ((addressValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Address should not be empty.</small>)
                               ))} 
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="citizenship">Citizenship</label>
                            <input type="text" name="citizenship" 
                            id="citizenship" value={state.citizenship}
                             onChange={handleChange} className="form-control" 
                             placeholder="CitizenShip" required={isRequired}/>
                             {(state.citizenship===null||state.citizenship===window.localStorage.getItem("citizenship"))
                               ? null
                               : ((state.citizenship.trim()==="")
                               ? (<small style={{"color":"red"}}>Citizenship should not be Empty</small>)
                               : ((citizenshipValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Citizenship should contain only letters</small>)
                               )))}
                        </div>
                    </div>
                    
                </div>
                <div className="row my-row">
                <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="country">Country</label>
                            <input type="text" name="country"
                             id="country" value={state.country} 
                             onChange={handleChange} className="form-control"
                              placeholder="Country" required={isRequired}/>
                              {(state.country===null||state.country===window.localStorage.getItem("country"))
                               ? null
                               : ((state.country.trim()==="")
                               ? (<small style={{"color":"red"}}> Country should not be Empty</small>)
                               : ((countryValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}> Country should contain only letters</small>)
                               )))} 
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="state">State</label>
                            <input type="text" name="state" id="state"
                             value={state.state} onChange={handleChange} 
                             className="form-control" placeholder="State" required={isRequired}/>
                             {(state.state===null||state.state===window.localStorage.getItem("state"))
                               ? null
                               : ((state.state.trim()==="")
                               ? (<small style={{"color":"red"}}> State should not be Empty</small>)
                               : ((stateValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}> State should contain only letters</small>)
                               )))} 
                        </div>
                    </div>
                    
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="email">Email</label>
                            <input type="text" name="email" id="email" 
                            value={state.email} onChange={handleChange} 
                            className="form-control" placeholder="E-Mail" required={isRequired}/>
                            {(state.email===null||state.email===window.localStorage.getItem("email"))
                               ? null
                               : ((state.email.trim()==="")
                               ? (<small style={{"color":"red"}}> Email should not be Empty</small>)
                               : ((emailValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Enter a valid E-Mail</small>)
                               )))}
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="maritalStatus">Marital Status</label>
                            <select name="maritalStatus" id="maritalStatus" value={state.maritalStatus} onChange={handleChange} className="form-control">
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row my-row">
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="contactNumber">Contact&nbsp;Number</label>
                            <input type="number" name="contactNumber"
                             id="contactNumber" value={state.contactNumber} 
                             onChange={handleChange} className="form-control"
                              placeholder="Contact number" required={isRequired} />
                              {(state.contactNumber===null||state.contactNumber===window.localStorage.getItem("contactNumber"))
                               ? null
                               : ((state.contactNumber.trim()==="")
                               ? (<small style={{"color":"red"}}>Contact number should not be Empty</small>)
                               : ((contactNumberValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Enter a valid 10-digit phone number</small>)
                               )))}
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="dob">Date of birth</label>
                            <input type="date" name="dob" id="dob" 
                            value={state.dob} onChange={handleChange} 
                            className="form-control" max={date} required={isRequired} style={{"backgroundColor":"darkgrey","color":"white"}} disabled/>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="registrationDate">Registration Date</label>
                            <input type="date" name="registrationDate" id="registrationDate" defaultValue={date} className="form-control"
                            style={{"backgroundColor":"darkgrey","color":"white"}}
                             disabled/>
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="accountType">Account type</label>
                            <select name="accountType" id="accountType" value={state.accountType} onChange={handleChange} className="form-control">
                                <option value="savings">Savings</option>
                                <option value="salary">Salary</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row my-row">
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="branchName">Branch&nbsp;Name</label>
                            <input type="text" name="branchName" 
                            id="branchName" value={state.branchName} 
                            onChange={handleChange} className="form-control" 
                            placeholder="Branch Name" required={isRequired}/>
                            {(state.branchName===null||state.branchName===window.localStorage.getItem("branchName"))
                               ? null
                               : ((state.branchName.trim()==="")
                               ? (<small style={{"color":"red"}}>Branch name should not be Empty</small>)
                               : ((branchNameValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Branch name should contain only letters</small>)
                               )))}
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="guardianType">Guardian Type</label>
                            <select name="guardianType" id="guardianType" value={state.guardianType} onChange={handleChange} className="form-control">
                                <option value="relative">Relative</option>
                                <option value="friend">Friend</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="guardianName">Guardian Name</label>
                            <input type="text" name="guardianName" id="guardianName" 
                            value={state.guardianName} onChange={handleChange} 
                            className="form-control" placeholder="Guardian Name"
                            required={isRequired} />
                            {(state.guardianName===null||state.guardianName===window.localStorage.getItem("guardianName"))
                               ? null
                               : ((state.guardianName.trim()==="")
                               ? (<small style={{"color":"red"}}> Guardian name should not be Empty</small>)
                               : ((guardianNameValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}> Guardian name should contain only letters</small>)
                               )))}
                        </div>
                    </div>
                    
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="documentType">Identification Document Type</label>
                            <select name="documentType" id="documentType"
                             value={state.documentType} onChange={handleChange}
                              className="form-control">
                                <option value="pancard">Pan Card</option>
                                <option value="aadhar">Aadhar Card</option>
        
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row my-row">
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="idn">Identification document number</label>
                            <input type="text" name="idn" 
                            id="idn" className="form-control" 
                            value={state.idn} onChange={handleChange} 
                            placeholder="Document number" required={isRequired}/>
                             {(state.idn===null||(state.idn===window.localStorage.getItem("idn")&&
                             (state.documentType===window.localStorage.getItem("documentType"))))
                               ? null
                               : ((state.idn.trim()==="")
                               ? (<small style={{"color":"red"}}>Identification document number should not be Empty</small>)
                               : ((idnValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Invalid {state.documentType} number</small>)
                               )))}
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="accHolderName">Reference account holder Name</label>
                            <input type="text" name="accHolderName"
                             id="accHolderName" className="form-control"
                            value={state.accHolderName} onChange={handleChange}
                             placeholder="Reference account holder Name" required={isRequired}/>
                             {(state.accHolderName===null||state.accHolderName===window.localStorage.getItem("accHolderName"))
                               ? null
                               : ((state.accHolderName.trim()==="")
                               ? (<small style={{"color":"red"}}>Account holder name should not be Empty</small>)
                               : ((accHolderNameValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Account holder name should contain only letters</small>)
                               )))}
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="accHolderNumber">Reference account holder Number</label>
                            <input type="number" name="accHolderNumber"
                             id="accHolderNumber" value={state.accHolderNumber} 
                             onChange={handleChange} className="form-control" 
                             placeholder="Reference account holder Number" required={isRequired} />
                             {(state.accHolderNumber===null||state.accHolderNumber===window.localStorage.getItem("accHolderNumber"))
                               ? null
                               : ((state.accHolderNumber.trim()==="")
                               ? (<small style={{"color":"red"}}>Account holder number should not be Empty</small>)
                               : ((accHolderNumberValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Enter a valid 16-digit account number</small>)
                               )))}
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="accHolderAddress">Reference account holder Address</label>
                            <input type="text" name="accHolderAddress"
                             id="accHolderAddress" value={state.accHolderAddress}
                              onChange={handleChange} className="form-control" 
                              placeholder="Reference account holder address" required={isRequired}/>
                              {(state.accHolderAddress===null||state.accHolderAddress===window.localStorage.getItem("accHolderAddress"))
                               ? null
                               : ((state.accHolderAddress.trim()==="")
                               ? (<small style={{"color":"red"}}>Account holder address should not be Empty</small>)
                               : ((accHolderAddressValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Account holder address should contain only letters</small>)
                               )))}
                        </div>
                    </div>
                </div>
                <div className="row my-row">
                    <div className="col-lg-12">
                      
                        <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ImPencil/>}
                           style={{"width":"130px"}}
                            type="submit" value="Update"
                            className="btn btn-primary float-right "
                            
                >Update</Button>
                </div>
                </div> 
                <div>
                    <SuccessPopup message={message} trigger={buttonPopup}>
                    
                    </SuccessPopup>
                        
                    </div>
                 
            </form>
            </div>
            </div>
            </div>
    )
    );
}
export default withRouter(UpdateDetails);