import React, {useState} from 'react';
import r from './RegistrationForm.module.css';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import Button from '@material-ui/core/Button'
import VpnKey from '@material-ui/icons/VpnKey'
import { BiUpload} from "react-icons/bi";
function RegistrationForm(props)  {
    var date=new Date().toISOString().substr(0,10);
    let isRequired=true;

    const [loading,setLoading]=useState(false)
    const [state , setState] = useState({
        firstName:null,
        lastName:null,
        password:null,
        gender:"male",   
        guardianType:"Relative",  
        guardianName:null,
        address:null,
        citizenship:null,
        state:null,
        country:null,
        email:null,
        maritalStatus:"single",
        contactNumber:null,
        dob:null,
        registrationDate:date,
        accountType:"savings",
        branchName:null,
        citizenStatus:"Please choose a D.O.B",
        ida :null,
        documentType :"aadhar",
        idn :null,
        accHolderName:null,
        accHolderNumber:null,
        accHolderAddress:null,
        checkid:false,
    })
    const redirectToLogin = () => {
        props.history.push('/login'); 
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
         if((firstNameValidate())&&(lastNameValidate())&&(passwordValidate())&&(guardianNameValidate())
        &&(stateValidate())&&(countryValidate())&&(addressValidate())&&(emailValidate())
         &&(citizenshipValidate())&&(branchNameValidate())&&(accHolderNameValidate())&&
         (accHolderNameValidate())&&(accHolderAddressValidate())&&(contactNumberValidate())
         &&(accHolderNumberValidate())&&(idaValidate())&&(idnValidate())&&(dobValidate()))
         {   
            setLoading(true)
            axios.post("https://localhost:44331/api/UserDetails",{
                firstName:state.firstName,
                lastName:state.lastName,
                password:state.password,
                gender:state.gender,
                guardianType:state.guardianType,
                guardianName:state.guardianName,
                address:state.address,
                citizenship:state.citizenship,
                state:state.state,
                country:state.country,
                email:state.email,
                maritalStatus:state.maritalStatus,
                contactNumber:state.contactNumber,
                dob:state.dob,
                registrationDate:state.registrationDate,
                accountType:state.accountType,
                branchName:state.branchName,
                citizenStatus:state.citizenStatus,
                ida:state.ida,
                documentType:state.documentType,
                idn:state.idn,
                accHolderName:state.accHolderName,
                accHolderAddress:state.accHolderAddress,
                accHolderNumber:state.accHolderNumber
                }).then((response)=>{   
                console.log(response.data);
                window.sessionStorage.setItem("firstName",response.data.firstName)
                window.sessionStorage.setItem("customerId",response.data.customerId)
                window.sessionStorage.setItem("accountNumber",response.data.accountNumber)
                props.history.push("/SuccessfullyRegistered")
            }).catch(function (error)
            {   
                setLoading(false)
                if(error.request){
                    
                    props.history.push('/error')
                    console.log("server not reponsed")
                }
                else{
                    console.log("something happened")
                }
            });
            setLoading(false)   
         }
        }
    const firstNameValidate=()=>{
        if((state.firstName!=null) &&(state.firstName.search(/[^A-Za-z\s]/) === -1)){
            return true
        }
        return false
    } 
    const lastNameValidate=()=>{
        if((state.lastName!=null) &&(state.lastName.search(/[^A-Za-z\s]/) === -1)){
            return true
        }
        return false
    }
    const passwordValidate=()=>{
        if((state.password!=null)&&(state.password.length>=8)){
            return true;
        }
        return false;
    }
    const guardianNameValidate=()=>{
        if((state.guardianName!=null) &&(state.guardianName.search(/[^A-Za-z\s]/) === -1)){
            return true
        }
        return false
    }
    const stateValidate=()=>{
        if((state.state!=null) &&(state.state.search(/[^A-Za-z\s]/) === -1)){
            return true
        }
        return false
    }
    const countryValidate=()=>{
        if((state.country!=null) &&(state.country.search(/[^A-Za-z\s]/) === -1)){
            return true
        }
        return false
    }
    const addressValidate=()=>{
        if((state.address!=null) &&(state.address.trim().length>0)){
            return true
        }
        return false
    }
    const emailValidate=()=>{
        if((state.email!=null)&& (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)))
        {
            return true
        } return false
    }
    const citizenshipValidate=()=>{
        if((state.citizenship!=null)&&(state.citizenship.search(/[^A-Za-z\s]/) === -1)){
            return true
        }
        return false
    }
    const branchNameValidate=()=>{
        if((state.branchName!=null)&&(state.branchName.search(/[^A-Za-z\s]/) === -1)){
            return true
        }
        return false
    }
    const accHolderNameValidate=()=>{
        if((state.accHolderName!=null)&&(state.accHolderName.search(/[^A-Za-z\s]/) === -1)){
            return true
        } 
        return false
    }
    const accHolderAddressValidate=()=>{
        if((state.accHolderAddress!=null)&&(state.accHolderAddress.length>0)){
            return true
        }
        return false
    }
    const contactNumberValidate=()=>{
        if((state.contactNumber!=null)&&(state.contactNumber.length!=10)){
            return false
        }
        return true
    }
    const accHolderNumberValidate=()=>{
        if((state.accHolderNumber!=null)&&(state.accHolderNumber.length!=16)){
            return false
        }
        return true
    }
    const idaValidate=()=>{
        if(((state.accountType=="savings")&&(state.ida>=5000))||((state.accountType=="salary")&&(state.ida>=0))){
            return true
        }
        return false
    }
    const pancardValidate=()=>{
        let reg=/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
           if(reg.test(state.idn)){
               return true
           }

        return false
}
    const aadharValidate=()=>{
        if(state.idn.length==12){
            if (!(isNaN(state.idn))){
                return true
            }
        }
        return false 
    }
    const idnValidate=()=>{
        if((state.documentType=="pancard")&&(pancardValidate())||(state.documentType=="aadhar")&&(aadharValidate())){
            return true 
        }
        return false
    }
    const dobValidate=()=>{
        var now =new Date();                            
    var currentY= now.getFullYear();                
    var currentM= now.getMonth();                   
      
    var dobget =state.dob; 
    var dob= new Date(dobget);                             
    var prevY= dob.getFullYear();                          
    var prevM= dob.getMonth();                             
      
    var ageY =currentY - prevY;
    var ageM =Math.abs(currentM- prevM);  
    if(ageY<18){
        state.citizenStatus="Minor";
    }        
    else if((ageY>18)&&(ageY<=60)){
        state.citizenStatus="Normal";
    }
    else{
        state.citizenStatus="Senior";
    }
        if((ageY>=18)){
            return true
        }
        return false
    }
    const componentDidMount=()=>{
        document.body.style.backgroundImage= "url('https://jooinn.com/images/dramatic-landscape-7.jpg')";
    }
    return(
        <div className={r.regdiv}>
            <div style={{
                "margin":"1px 80px",
                

        }}>
            <div className={r.regcontainer}>
        <div className="row">
            <div className="col">
                <div className="d-flex align-items-end justify-content-start h-100">
                    <h3 style={{"float":"left",color:"yellow"}}>Registration Form</h3>
                </div>
            </div>
            <div  className="col ">
                <div className="d-flex justify-content-end align-items-center">
            <span className={r.already}
            style={{"color":"yellow"}}> Already have account?</span>
            <Button 
                    type="submit" 
                    variant="contained"
            color="primary"
                    endIcon={<VpnKey/>}
                    className={`btn btn-primary ${r.btnLogin}`}
                    onClick={() => redirectToLogin()}
                >Login</Button>
            </div>
            </div>
        
        <form className={`was-validated ${r.myform}`} onSubmit={submitHandler}>
                <div className="row my-row">
                    <div className="col-lg-3 my-col"> 
                        <div className="form-group"> 
                        
                            <label style={{"color":"white"}} style={{"color":"white"}} for="firstName">First Name</label>
                            
                            <input type="text"
                             value={state.firstName} onChange={handleChange}
                             name="firstName" 
                             id="firstName"
                             className="form-control" 
                             placeholder="First Name"
                             required={isRequired}
                              />
                              {(state.firstName==null)
                               ? null
                               : ((state.firstName.trim()=="")
                               ? (<small style={{"color":"red"}}>Name should not be Empty</small>)
                               : ((firstNameValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Name should contain only letters</small>)
                               )))} 
                        </div>
                        
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="lastName">Second&nbsp;Name</label>
                            <input type="text"  name="lastName" id="lastName" className="form-control"
                             value={state.lastName} onChange={handleChange}
                             placeholder="second name"
                             value={state.lastName} onChange={handleChange}
                             required={isRequired}/>
                             {(state.lastName==null)
                               ? null
                               : ((state.lastName.trim()=="")
                               ? (<small style={{"color":"red"}}>User name should not be Empty</small>)
                               : ((lastNameValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>User Name should contain only letters</small>)
                               )))}
                            
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="password">Password</label>
                            <input type="password"  name="password"
                            value={state.password} onChange={handleChange}
                            required={isRequired}
                             id="password" className="form-control" placeholder="Password" required={isRequired}/>
                              {(state.password==null)
                               ? null
                               : ((state.password.trim()=="")
                               ? (<small style={{"color":"red"}}>Password should not be Empty</small>)
                               : ((passwordValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red","font":"bold"}}
                                >Password length should be greater than 7</small>)
                               )))} 
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="gender">Gender</label>
                            <select name="gender" id="gender" value={state.gender} onChange={handleChange} className="form-control">
                                <option value="male">Male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row my-row">
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
                            {(state.guardianName==null)
                               ? null
                               : ((state.guardianName.trim()=="")
                               ? (<small style={{"color":"red"}}> Guardian name should not be Empty</small>)
                               : ((guardianNameValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}> Guardian name should contain only letters</small>)
                               )))}
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="address">Address</label>
                            <input type="text" name="address" id="address"
                             value={state.address} onChange={handleChange} 
                             className="form-control" placeholder="Address" required={isRequired}/>
                             {(state.address==null)
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
                             {(state.citizenship==null)
                               ? null
                               : ((state.citizenship.trim()=="")
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
                              {(state.country==null)
                               ? null
                               : ((state.country.trim()=="")
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
                             {(state.state==null)
                               ? null
                               : ((state.state.trim()=="")
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
                            {(state.email==null)
                               ? null
                               : ((state.email.trim()=="")
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
                              {(state.contactNumber==null)
                               ? null
                               : ((state.contactNumber.trim()=="")
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
                            className="form-control" max={date} required={isRequired}/>
                            {(state.dob==null)
                               ? null
                               : ((state.dob=="")
                               ? (<small style={{"color":"red"}}>Date of Birth should not be Empty</small>)
                               : ((dobValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Age should between 18 and 96</small>)
                               )))}
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="registrationDate">Registration Date</label>
                            <input type="date" name="registrationDate" id="registrationDate" defaultValue={date} className="form-control" disabled/>
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
                            {(state.branchName==null)
                               ? null
                               : ((state.branchName.trim()=="")
                               ? (<small style={{"color":"red"}}>Branch name should not be Empty</small>)
                               : ((branchNameValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Branch name should contain only letters</small>)
                               )))}
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="citizenStatus">Citizen&nbsp;Status</label>
                            <input type="text" name="citizenStatus" id="citizenStatus" 
                            value={state.citizenStatus} onChange={handleChange} 
                            className="form-control" placeholder="Citizen Status" required={isRequired} disabled />
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="ida">Initial deposit Amount</label>
                            <input type="number" name="ida" id="ida" className="form-control"
                             value={state.ida} onChange={handleChange}
                              placeholder="Initial deposit Amount" required={isRequired}/>
                              {(state.ida==null)
                               ? null
                               : ((state.ida.trim()=="")
                               ? (<small style={{"color":"red"}}>Initial deposit amount should not be Empty</small>)
                               : ((idaValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Deposit should be greater than 5000 for Savings account</small>)
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
                             {(state.idn==null)
                               ? null
                               : ((state.idn.trim()=="")
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
                             {(state.accHolderName==null)
                               ? null
                               : ((state.accHolderName.trim()=="")
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
                             placeholder="Reference account holder Number" required={isRequired}/>
                             {(state.accHolderNumber==null)
                               ? null
                               : ((state.accHolderNumber.trim()=="")
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
                              {(state.accHolderAddress==null)
                               ? null
                               : ((state.accHolderAddress.trim()=="")
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
                        endIcon={<BiUpload/>}
                           style={{"width":"130px"}}
                            type="submit" 
                            className="btn btn-primary float-right ">
                             Register 
                            </Button>
                

                    </div>
                </div>  
            </form>
            </div>
            </div>
            </div>
            </div>
            
    )
}

export default withRouter(RegistrationForm);