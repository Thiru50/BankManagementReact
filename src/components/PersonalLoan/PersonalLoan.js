import React,{useState}from 'react'
import './PersonalLoan.css'
import { withRouter } from "react-router-dom";
import PersonalLoanSuccess from '../popup/PersonalLoanSuccess/PersonalLoanSuccess';
import axios from 'axios';

import Loading from '../Loading/Loading';
import NavBar from '../NavBar/NavBar';
import Button from '@material-ui/core/Button'
import { BiUpload} from "react-icons/bi";
function PersonalLoan(props) {
    const [perLoanButtonPopup,setPerButtonPopup]=useState(false);
    let isRequired=true;
    var date=new Date().toISOString().substr(0,10);
    var loanIssueDate=new Date(Date.now() +  7 * 24 * 60 * 60 * 1000).toISOString().substr(0,10);
    const [perLoanDetails,setPerLoanDetails]=useState({
        firstName:null,
        customerId:"",
        loanAmount:null,
        loanApplyDate:date,
        loanIssueDate:loanIssueDate,
        rateOfInterest:null,
        durationOfLoan:"5",
        companyName:null,
        designation:null,
        totalExperience:null,
        experienceInCurrentCompany:null,
        annualIncome:null,
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setPerLoanDetails(prevState => ({
            ...prevState,
            [id] : value
        })) 
    }
    const redirectToEducationalLoan=()=>{
        props.history.push('/EducationalLoan'); 
    }
     const [loading,setLoading]=useState(false)
    const submitHandler=(event)=>{
        event.preventDefault();
        if((loanAmountValidate())&&(rateOfInterestValidate())&&(companyNameValidate())&&(designationValidate())&&
        (totalExperienceValidate())&&(experienceInCurrentCompanyValidate())&&(annualIncomeValidate))
        {       
                setLoading(true)
                axios.post("https://localhost:44313/api/PersonalLoans",{
                customerId:0,
                firstName:perLoanDetails.firstName,
               
                loanAmount:perLoanDetails.loanAmount,
                loanApplyDate:perLoanDetails.loanApplyDate,
                loanIssueDate:perLoanDetails.loanIssueDate,
                durationOfLoan:perLoanDetails.durationOfLoan,
                rateOfInterest:perLoanDetails.rateOfInterest,
               
                companyName:perLoanDetails.companyName,
                designation:perLoanDetails.designation,
                yourtotalExperience:perLoanDetails.totalExperience,
                experienceInCurrentCompany:perLoanDetails.experienceInCurrentCompany,
               
                annualIncome:perLoanDetails.annualIncome
            }).then((response)=>{
                setPerButtonPopup(true)
                console.log(perLoanDetails);
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
        }
        else{
            console.log("Not working")
        }
        
    }
    const loanAmountValidate=()=>{
        if((perLoanDetails.loanAmount!=null)&&(perLoanDetails.loanAmount>0)){
             return true
        }
        return false
    }
    const rateOfInterestValidate=()=>{
        if((perLoanDetails.rateOfInterest!=null)&&((perLoanDetails.rateOfInterest>=2)&&(perLoanDetails.rateOfInterest<=100))){
            return true
        }
        return false
    }
    const companyNameValidate=()=>{
        if((perLoanDetails.companyName!=null)&&(perLoanDetails.companyName.search(/[^A-Za-z\s]/)=== -1)){
          return true
      }
      return false
    }
    const designationValidate=()=>{
        if((perLoanDetails.designation!=null)&&(perLoanDetails.designation.search(/[^A-Za-z\s]/)=== -1)){
          return true
      }
      return false
    }
    const totalExperienceValidate=()=>{
        if((perLoanDetails.totalExperience!=null)&&(perLoanDetails.totalExperience>0)){
            return true 
        }
        return false
    }
    const experienceInCurrentCompanyValidate=()=>{
        if((perLoanDetails.experienceInCurrentCompany!=null)&&(perLoanDetails.experienceInCurrentCompany>0)){
            return true 
        }
        return false
    }
    const annualIncomeValidate=()=>{
        if((perLoanDetails.annualIncome!=null)&&(perLoanDetails.annualIncome>0)){
            return true 
        }
        return false
    }
    const eLoan="Click for Educational Loan-->"
    return (
        (loading?<Loading/>
        :
        <div> <NavBar/>
        <div className="Pregdiv">
        <div style={{
                "margin":"0 50px",
                

        }}>
            <div className="row">
            <div className="col">
                <div className="d-flex align-items-end justify-content-start h-100">
                    <h3 style={{"float":"left","color":"yellow"}}>Personal Loan Form</h3>
                </div>
            </div>
            <div  className="col ">
                <div className="d-flex justify-content-end align-items-center">
            <span className="already">{eLoan}</span>
            <button 
                    type="submit" 
                    className="btn btn-primary btnLogin"
                    style={{"width": "160px"}}
                    onClick={() => redirectToEducationalLoan()}
                >Educational Loan</button>
            </div>
            </div>
            </div>
            <form className="was-validated my-form" onSubmit={submitHandler}>
                <div className="row my-row">
                    <div className="col-lg-3 my-col "> 
                        <div className="form-group"> 
                            <label style={{"color":"white"}} style={{"color":"white"}} for="firstName">First Name</label>
                            <input type="text"
                             value={perLoanDetails.firstName} onChange={handleChange}
                             name="firstName" 
                             id="firstName"
                             className="form-control" 
                             placeholder="First Name"
                             required={isRequired}
                             disabled
                              />
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="annualIncome">Annual Income</label>
                            <input type="number"  name="annualIncome" id="annualIncome" className="form-control"
                             placeholder="Annual Income"
                             value={perLoanDetails.annualIncome} onChange={handleChange}
                             required={isRequired}/>
                             {(perLoanDetails.annualIncome==null)
                               ? null
                               : ((perLoanDetails.annualIncome.trim()=="")
                               ? (<small style={{"color":"red"}}>Annual Income should not be Empty</small>)
                               : ((annualIncomeValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Annual Income should be greater than 0</small>)
                               )))}
                            
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="customerId">Customer Id</label>
                            <input type="customerId"  name="customerId"
                            value={perLoanDetails.customerId} onChange={handleChange}
                            required={isRequired}
                             id="customerId" className="form-control" placeholder="customerId"
                              required={isRequired} disabled/>
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="loanAmount">Loan Amount in Rupees</label>
                            <input type="number" name="loanAmount"
                             id="loanAmount" value={perLoanDetails.loanAmount} 
                             onChange={handleChange} className="form-control"
                              placeholder="Loan Amount" required={isRequired} />
                              {(perLoanDetails.loanAmount==null)
                               ? null
                               : ((perLoanDetails.loanAmount.trim()=="")
                               ? (<small style={{"color":"red"}}>loan Amount should not be Empty</small>)
                               : ((loanAmountValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>loan amount should be greater than 0</small>)
                               )))}
                        </div>
                    </div>
                </div>
                <div className="row my-row">
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="loanApplyDate">Loan apply Date</label>
                            <input type="date" name="loanApplyDate" id="loanApplyDate" 
                            defaultValue={date} className="form-control" disabled/>
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="loanIssueDate">Possible Loan issue date</label>
                            <input type="date" name="loanIssueDate" id="loanIssueDate" 
                            value={perLoanDetails.loanIssueDate} onChange={handleChange} 
                            className="form-control"  required={isRequired}
                            disabled/>
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">

                    <div className="form-group">
                            <label style={{"color":"white"}} for="rateOfInterest">Rate of Interst in Percentage</label>
                            <input type="number" name="rateOfInterest"
                             id="rateOfInterest" value={perLoanDetails.rateOfInterest} 
                             onChange={handleChange} className="form-control"
                              placeholder="Rate of interest" required={isRequired} />
                              {(perLoanDetails.rateOfInterest==null)
                               ? null
                               : ((perLoanDetails.rateOfInterest.trim()=="")
                               ? (<small style={{"color":"red"}}>Rate of interest should not be Empty</small>)
                               : ((rateOfInterestValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>It should be greater than 2 and lesser than 100</small>)
                               )))}
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="durationOfLoan">Duration of loan</label>
                            <select name="durationOfLoan" id="durationOfLoan" value={perLoanDetails.durationOfLoan} 
                            onChange={handleChange} className="form-control">
                                <option value="5-years">5 years</option>
                                <option value="10-years">10 years</option>
                                <option value="15-years">15 years</option>
                                <option value="20-years">20 years</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                <div className="row my-row">
                <div className="col-lg-3 my-col">
                <div className="form-group">
                            <label style={{"color":"white"}} for="companyName">Course Name</label>
                            <input type="text" name="companyName" id="companyName"
                             value={perLoanDetails.companyName} onChange={handleChange} 
                             className="form-control" placeholder="Company name" required={isRequired}/>
                             {(perLoanDetails.companyName==null)
                               ? null
                               : ((perLoanDetails.companyName.trim()=="")
                               ? (<small style={{"color":"red"}}> Company Name should not be Empty</small>)
                               : ((companyNameValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}> Company name should contain only letters</small>)
                               )))} 
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="designation">Designation Name</label>
                            <input type="text" name="designation" id="designation"
                             value={perLoanDetails.designation} onChange={handleChange} 
                             className="form-control" placeholder="designation" required={isRequired}/>
                             {(perLoanDetails.designation==null)
                               ? null
                               : ((perLoanDetails.designation.trim()=="")
                               ? (<small style={{"color":"red"}}> Designation should not be Empty</small>)
                               : ((designationValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}> Designation should contain only letters</small>)
                               )))} 
                        </div>
                    </div>
                    
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="totalExperience">Your Total experience (years)</label>
                            <input type="number"  name="totalExperience" id="totalExperience" className="form-control"
                             placeholder="Your total experience in years"
                             value={perLoanDetails.totalExperience} onChange={handleChange}
                             required={isRequired}/>
                             {(perLoanDetails.totalExperience==null)
                               ? null
                               : ((perLoanDetails.totalExperience.trim()=="")
                               ? (<small style={{"color":"red"}}>Your total experience should not be Empty</small>)
                               : ((totalExperienceValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Your total experience should be greater than 0</small>)
                               )))}
                            
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="experienceInCurrentCompany">Experience in current company (years)</label>
                            <input type="number"  name="experienceInCurrentCompany" id="experienceInCurrentCompany" className="form-control"
                             placeholder="Experience in current company"
                             value={perLoanDetails.experienceInCurrentCompany} onChange={handleChange}
                             required={isRequired}/>
                             {(perLoanDetails.experienceInCurrentCompany==null)
                               ? null
                               : ((perLoanDetails.experienceInCurrentCompany.trim()=="")
                               ? (<small style={{"color":"red"}}>Your's experience should not be Empty</small>)
                               : ((experienceInCurrentCompanyValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Your's experience in years should be greater than 0</small>)
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
                            type="submit" value="Update"
                            className="btn btn-primary float-right "
                            
                >Submit</Button>

                    </div>
                    <PersonalLoanSuccess trigger={perLoanButtonPopup}>
                    
                    </PersonalLoanSuccess>
                </div>  
            </form>
            </div>
            </div>
            </div>
           
    )
    )
}

export default withRouter(PersonalLoan)
