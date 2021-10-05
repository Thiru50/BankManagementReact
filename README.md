# BANK MANAGEMENT
#### Only registered User can login
 #### If the user is not a Registered user he can able to register
 #### If the credentials were wrong user will redirect to InValid Credentials page
 #### If the credentials were right then JWT token will generate from API and in React it will validate the token then user will redirect to Home page
 #### From Home page user can able to apply for Educational loans and Personal loans
 #### If the form is valid then the data will be stored in database
 #### User can able to update their details from Update details page
 #### A logout button will be there in navbar. User can able to logout anytime they want
 #### And by clicking logout button they will be redirect to Login Page
 #### Home page, Loan applying page, details updated page are Protected routes meaning only authorized user can enter in this page else they will be redirect to login page
 #### If any error occurs in anypage like error in connecting with API, then the user will redirect to error page