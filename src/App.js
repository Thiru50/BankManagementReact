import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Loading from './components/Loading/Loading';
//const Loading=React.lazy(()=>import ('./components/Loading/Loading'))
const LoginForm =React.lazy(()=>import ('./components/LoginForm/LoginForm.js')) 
const RegistrationForm=React.lazy(()=>import ('./components/RegistrationForm/RegistrationForm'))  
const SuccessfullyRegistered=React.lazy(()=>import ('./components/SuccessfullyRegistered/SuccessfullyRegistered'))  
const UpdateDetails=React.lazy(()=>import ('./components/UpdateDetails/UpdateDetails')) 
const Home=React.lazy(()=>import ('./components/Home/Home')) 
const First=React.lazy(()=>import ('./components/First/First'))
const Test=React.lazy(()=>import ('./components/Test/Test')) 
const EducationalLoan=React.lazy(()=>import ('./components/EducationalLoan/EducationalLoan'))  
const PersonalLoan=React.lazy(()=>import ('./components/PersonalLoan/PersonalLoan'))
const Error=React.lazy(()=>import ('./components/Error/Error'))  


function App() {
  return (
    <div>
   <Router>
    <div >
        <div >
          <Switch>
            <React.Suspense fallback={<Loading/>}>
           <Route path="/" component={First} exact={true}> 
            </Route> 
            <div >
            <Route path="/SuccessfullyRegistered" component={SuccessfullyRegistered} >
            </Route>
            <Route path="/UpdateDetails" component={UpdateDetails}>
            </Route>
            <Route  path="/register" component={RegistrationForm}> 
            </Route> 
            <Route path="/login" component={LoginForm}>
            </Route> 
            <Route path="/home" component={Home}> 
            </Route> 
            <Route path="/EducationalLoan" component={EducationalLoan}>
            </Route>
            <Route path="/PersonalLoan" component={PersonalLoan}>
            </Route>
            <Route path="/test" component={Test}>
            </Route> 
            <Route path="/error" component={Error}>
            </Route>
            </div>
            </React.Suspense>
            </Switch>
            
        </div> 
    </div>
    </Router>
    </div>
  );
}

export default App;
