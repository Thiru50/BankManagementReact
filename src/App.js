import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Loading from './components/Loading/Loading';
import Auth from './components/Auth/Auth';
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
const InvalidCredentials=React.lazy(()=>import ('./components/InvalidCredentials/InvalidCredentials'))


function App() {
  return (
    <div>
   <Router>
    <div >
        <div >
          <Switch>
            <React.Suspense fallback={<Loading/>}>
           <Route path="/" component={First} exact={true}/> 
            <div >
            <Route path="/SuccessfullyRegistered" component={SuccessfullyRegistered} />           
            <PrivateRoute path="/UpdateDetails" component={UpdateDetails}/>                     
            <PrivateRoute path="/home" component={Home}/>             
            <PrivateRoute path="/EducationalLoan" component={EducationalLoan}/>           
            <PrivateRoute path="/PersonalLoan" component={PersonalLoan}/>          
            <Route path="/test" component={Test}/>           
            <Route path="/error" component={Error}/>           
            <Route path="/InvalidCredentials" component={InvalidCredentials}/>     
            <Route path="/register" component={RegistrationForm}/>            
            <Route path="/login" component={LoginForm}/>       
            </div>
            </React.Suspense>
            </Switch>
            
        </div> 
    </div>
    </Router>
    </div>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
      {...rest}
      render={props =>
          Auth()
          ? (<Component {...props} />) 
          : (props.history.push("/login"))
      }
    />
);

export default App;
