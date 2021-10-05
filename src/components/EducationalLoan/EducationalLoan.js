import React,{useState} from 'react'
import './EducationalLoan.css'
import { withRouter } from "react-router-dom";
import axios from 'axios';
import Loading from '../Loading/Loading';
import NavBar from '../NavBar/NavBar';
import Button from '@material-ui/core/Button'
import { BiUpload} from "react-icons/bi";
import SuccessPopup from '../popup/SuccessPopup/SuccessPopup';

function EducationalLoan(props) {
    const message="Educational Loan form submitted!!"
    let isRequired=true;
    var date=new Date().toISOString().substr(0,10);
    var loanIssueDate=new Date(Date.now() +  7 * 24 * 60 * 60 * 1000).toISOString().substr(0,10);
   // let loanIssueDate=loanIssueDate1.toISOString().substr(0,10);
   const [edLoanButtonPopup,setEdLoanButtonPopup]=useState(false);
   const [loading,setLoading]=useState(false)
    const [edLoanDetails,setEdLoanDetails]=useState({
        firstName:window.localStorage.getItem("firstName"),
        lastName:window.localStorage.getItem("lastName"),
        customerId:window.localStorage.getItem("customerId"),
        loanAmount:null,
        loanApplyDate:date,
        loanIssueDate:loanIssueDate,
        rateOfInterest:5,
        durationOfLoan:5,
        courseFee:null, 
        course:null,
        fatherName:null,
        fatherOccupation:null,
        fatherTotalExperience:null,
        fatherExperienceInCurrentCompany:null,
        rationCardNumber:null,
        annualIncome:null,
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setEdLoanDetails(prevState => ({
            ...prevState,
            [id] : value
        })) 
    } 

    const submitHandler=(event)=>{
        event.preventDefault()
        if((loanAmountValidate())&&(courseFeeValidate())&&(courseValidate())&&
        (fatherNameValidate())&&(fatherOccupationValidate())&&(fatherTotalExperienceValidate())&&
        (fatherExperienceInCurrentCompanyValidate())&&(rationCardNumberValidate())&&(annualIncomeValidate()))
        {       
            setLoading(true)
            axios.post("https://localhost:44313/api/EducationLoans",{
                customerId:window.localStorage.getItem("customerId"),
                firstName:edLoanDetails.firstName,
                lastName:edLoanDetails.lastName,
                loanAmount:edLoanDetails.loanAmount,
                loanApplyDate:edLoanDetails.loanApplyDate,
                loanIssueDate:edLoanDetails.loanIssueDate,
                durationOfLoan:edLoanDetails.durationOfLoan,
                rateOfInterest:edLoanDetails.rateOfInterest,
                courseFee:edLoanDetails.courseFee,
                courseName:edLoanDetails.course,
                fatherName:edLoanDetails.fatherName,
                fatherOccupation:edLoanDetails.fatherOccupation,
                fathertotalExperience:edLoanDetails.fatherTotalExperience,
                fatherExperienceInCurrentCompany:edLoanDetails.fatherExperienceInCurrentCompany,
                rationCardNumber:edLoanDetails.rationCardNumber,
                annualIncome:edLoanDetails.annualIncome
            }).then((response)=>{
                setEdLoanButtonPopup(true)
                setLoading(false)
                console.log(edLoanDetails);
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
      if((edLoanDetails.loanAmount!=null)&&(edLoanDetails.loanAmount>0)){
           return true
      }
      return false
  }
  const rateOfInterestValidate=()=>{
      if((edLoanDetails.rateOfInterest!=null)&&((edLoanDetails.rateOfInterest>=2)&&(edLoanDetails.rateOfInterest<=100))){
          return true
      }
      return false
  }
  const courseFeeValidate=()=>{
      if((edLoanDetails.courseFee!=null)&&(edLoanDetails.courseFee>0)){
          return true
      }
      return false
  }
  const courseValidate=()=>{
      if((edLoanDetails.course!=null)&&(edLoanDetails.course.search(/[^A-Za-z\s]/)=== -1)){
        return true
    }
    return false
  }
  const fatherNameValidate=()=>{
    if((edLoanDetails.fatherName!=null)&&(edLoanDetails.fatherName.search(/[^A-Za-z\s]/)=== -1)){
        return true
    }
    return false
  }
  const fatherOccupationValidate=()=>{
    if((edLoanDetails.fatherOccupation!=null)&&(edLoanDetails.fatherOccupation.search(/[^A-Za-z\s]/)=== -1)){
        return true
    }
    return false
}
const fatherTotalExperienceValidate=()=>{
    if((edLoanDetails.fatherTotalExperience!=null)&&(edLoanDetails.fatherTotalExperience>0)){
        return true 
    }
    return false
}
const fatherExperienceInCurrentCompanyValidate=()=>{
    if((edLoanDetails.fatherExperienceInCurrentCompany!=null)&&(edLoanDetails.fatherExperienceInCurrentCompany>0)){
        return true 
    }
    return false
}  
const rationCardNumberValidate=()=>{
    if((edLoanDetails.rationCardNumber!=null)&&(edLoanDetails.rationCardNumber>0)){
        return true 
    }
    return false
}
const annualIncomeValidate=()=>{
    if((edLoanDetails.annualIncome!=null)&&(edLoanDetails.annualIncome>0)){
        return true 
    }
    return false
}
const redirectToPersonalLoan=()=>{
    props.history.push('/PersonalLoan'); 
}
const pLoan="Click for personal Loan-->"
    return ((loading?<Loading/>
        :
        <div> <NavBar/>
        <div className="Eregdiv">
        <div style={{
                "margin":"0 50px",
                

        }}>
        <div className="row">
            <div className="col">
                <div className="d-flex align-items-end justify-content-start h-100">
                    <h3 style={{"float":"left","color":"yellow"}}>Educational Loan Form</h3>
                </div>
            </div>
            <div  className="col ">
                <div className="d-flex justify-content-end align-items-center">
            <span className="already">{pLoan}</span>
            <button 
                    type="submit" 
                    className="btn btn-primary btnLogin"
                    onClick={() => redirectToPersonalLoan()}
                >Personal Loan</button>
            </div>
            </div>
        </div>
            <form className="was-validated my-form" onSubmit={submitHandler}>
                <div className="row my-row">
                    <div className="col-lg-3 my-col "> 
                        <div className="form-group"> 
                            <label style={{"color":"white"}} style={{"color":"white"}} for="firstName"
                            >First Name</label>
                            <input type="text"
                            style={{"backgroundColor":"darkgrey","color":"white"}}
                             value={edLoanDetails.firstName} onChange={handleChange}
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
                            <label style={{"color":"white"}} for="lastName">Last&nbsp;Name</label>
                            <input type="text"  name="lastName" id="lastName" className="form-control"
                             value={edLoanDetails.lastName} onChange={handleChange}
                             placeholder="Last name"
                             style={{"backgroundColor":"darkgrey","color":"white"}}
                             required={isRequired} disabled/>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="customerId">Customer Id</label>
                            <input type="customerId"  name="customerId"
                            value={edLoanDetails.customerId} onChange={handleChange}
                            required={isRequired}
                             id="customerId" className="form-control" placeholder="customerId"
                              required={isRequired}
                              style={{"backgroundColor":"darkgrey","color":"white"}} disabled/>
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="loanAmount">Loan Amount in Rupees</label>
                            <input type="number" name="loanAmount"
                             id="loanAmount" value={edLoanDetails.loanAmount} 
                             onChange={handleChange} className="form-control"
                              placeholder="Loan Amount" required={isRequired} />
                              {(edLoanDetails.loanAmount==null)
                               ? null
                               : ((edLoanDetails.loanAmount.trim()=="")
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
                            defaultValue={date} className="form-control" style={{"backgroundColor":"darkgrey","color":"white"}} disabled/>
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="loanIssueDate">Possible Loan issue date</label>
                            <input type="date" name="loanIssueDate" id="loanIssueDate" 
                            value={edLoanDetails.loanIssueDate} onChange={handleChange} 
                            className="form-control"  required={isRequired} style={{"backgroundColor":"darkgrey","color":"white"}}
                            disabled/>
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">

                    <div className="form-group">
                            <label style={{"color":"white"}} for="rateOfInterest">Rate of Interst in Percentage</label>
                            <input type="text" name="rateOfInterest"
                             id="rateOfInterest" value={edLoanDetails.rateOfInterest} 
                             onChange={handleChange} className="form-control"
                              placeholder="Rate of interest" required={isRequired} style={{"backgroundColor":"darkgrey","color":"white"}} disabled />
                              
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="durationOfLoan">Duration of loan</label>
                            <select name="durationOfLoan" id="durationOfLoan" value={edLoanDetails.durationOfLoan} 
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
                            <label style={{"color":"white"}} for="courseFee">Course Fee in Rupees</label>
                            <input type="number" name="courseFee"
                             id="courseFee" value={edLoanDetails.courseFee} 
                             onChange={handleChange} className="form-control"
                              placeholder="Course Fee" required={isRequired} />
                              {(edLoanDetails.courseFee==null)
                               ? null
                               : ((edLoanDetails.courseFee.trim()=="")
                               ? (<small style={{"color":"red"}}>Course Fee should not be Empty</small>)
                               : ((courseFeeValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Course fee should be greaer than 0</small>)
                               )))}
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                        <div className="form-group">
                            <label style={{"color":"white"}} for="course">Course Name</label>
                            <input type="text" name="course" id="course"
                             value={edLoanDetails.course} onChange={handleChange} 
                             className="form-control" placeholder="Course name" required={isRequired}/>
                             {(edLoanDetails.course==null)
                               ? null
                               : ((edLoanDetails.course.trim()=="")
                               ? (<small style={{"color":"red"}}> Course Name should not be Empty</small>)
                               : ((courseValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}> Course should contain only letters</small>)
                               )))} 
                        </div>
                    </div>
                    
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="fatherName">Father's Name</label>
                            <input type="text"  name="fatherName" id="fatherName" className="form-control"
                             placeholder="Father's name"
                             value={edLoanDetails.fatherName} onChange={handleChange}
                             required={isRequired}/>
                             {(edLoanDetails.fatherName==null)
                               ? null
                               : ((edLoanDetails.fatherName.trim()=="")
                               ? (<small style={{"color":"red"}}>Father's should not be Empty</small>)
                               : ((fatherNameValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Father's name should contain only letters</small>)
                               )))}
                            
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="fatherOccupation">Father's occupation</label>
                            <input type="text"  name="fatherOccupation" id="fatherOccupation" className="form-control"
                             placeholder="Father's occupation"
                             value={edLoanDetails.fatherOccupation} onChange={handleChange}
                             required={isRequired}/>
                             {(edLoanDetails.fatherOccupation==null)
                               ? null
                               : ((edLoanDetails.fatherOccupation.trim()=="")
                               ? (<small style={{"color":"red"}}>Father's Occupation should not be Empty</small>)
                               : ((fatherOccupationValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Father's Occupation should contain only letters </small>)
                               )))}
                            
                        </div>
                    </div>
                </div>
                <div className="row my-row">
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="fatherTotalExperience">Father's Total experience (years)</label>
                            <input type="number"  name="fatherTotalExperience" id="fatherTotalExperience" className="form-control"
                             placeholder="Father's total experience in years"
                             value={edLoanDetails.fatherTotalExperience} onChange={handleChange}
                             required={isRequired}/>
                             {(edLoanDetails.fatherTotalExperience==null)
                               ? null
                               : ((edLoanDetails.fatherTotalExperience.trim()=="")
                               ? (<small style={{"color":"red"}}>Father's Total experience should not be Empty</small>)
                               : ((fatherTotalExperienceValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Father's Total experience should be greater than 0</small>)
                               )))}
                            
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="fatherExperienceInCurrentCompany">Experience in current company (years)</label>
                            <input type="number"  name="fatherExperienceInCurrentCompany" id="fatherExperienceInCurrentCompany" className="form-control"
                             placeholder="Experience in current company"
                             value={edLoanDetails.fatherExperienceInCurrentCompany} onChange={handleChange}
                             required={isRequired}/>
                             {(edLoanDetails.fatherExperienceInCurrentCompany==null)
                               ? null
                               : ((edLoanDetails.fatherExperienceInCurrentCompany.trim()=="")
                               ? (<small style={{"color":"red"}}>Father's experience should not be Empty</small>)
                               : ((fatherExperienceInCurrentCompanyValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Father's experience in years should be greater than 0</small>)
                               )))}
                            
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="rationCardNumber">Ration card number</label>
                            <input type="number"  name="rationCardNumber" id="rationCardNumber" className="form-control"
                             placeholder="Ration card number"
                             value={edLoanDetails.rationCardNumber} onChange={handleChange}
                             required={isRequired}/>
                             {(edLoanDetails.rationCardNumber==null)
                               ? null
                               : ((edLoanDetails.rationCardNumber.trim()=="")
                               ? (<small style={{"color":"red"}}>Ration card number should not be Empty</small>)
                               : ((rationCardNumberValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Enter a valid Ration card number</small>)
                               )))}
                            
                        </div>
                    </div>
                    <div className="col-lg-3 my-col">
                    <div className="form-group">
                            <label style={{"color":"white"}} for="annualIncome">Annual Income</label>
                            <input type="number"  name="annualIncome" id="annualIncome" className="form-control"
                             placeholder="Annual Income"
                             value={edLoanDetails.annualIncome} onChange={handleChange}
                             required={isRequired}/>
                             {(edLoanDetails.annualIncome==null)
                               ? null
                               : ((edLoanDetails.annualIncome.trim()=="")
                               ? (<small style={{"color":"red"}}>Annual Income should not be Empty</small>)
                               : ((annualIncomeValidate()
                               ? (<small style={{"color":"green"}}>Looks good!</small>)
                               : (<small style={{"color":"red"}}>Annual Income should be greater than 0</small>)
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
                    <SuccessPopup message={message} trigger={edLoanButtonPopup}>
                    
                    </SuccessPopup>
                </div>  
            </form>
            </div>
        </div>
        </div>
    )
    )
}

export default withRouter(EducationalLoan)
