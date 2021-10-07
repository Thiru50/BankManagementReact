
let isAuthenticated=true;
let token=window.localStorage.getItem("token");

  if((token)){
      isAuthenticated=true
  } 
  else{
      isAuthenticated=false
  }
function Auth() {
    return ( 
        isAuthenticated
    )
}

export default Auth
