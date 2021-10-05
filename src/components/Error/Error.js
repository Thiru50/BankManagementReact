
import React from 'react'
import { withRouter } from "react-router-dom";

import './Error.css'
function Error() {
    return ((
        <div className="Erdiv" >
        <section class="page_404">
    <div class="container">
      <div class="row"> 
      <div class="col-sm-12 ">
      <div class="col-sm-10 col-sm-offset-1  text-center">
      <div class="four_zero_four_bg">
        <h1 class="text-center ">500</h1>
      </div>
      
      <div class="contant_box_404">
      <h3 class="h2">
      Something went wrong!!
      </h3>
      
      <p>Problem may be in microservice</p>
      
      <a href="/home" class="link_404">Go to Home</a>
    </div>
      </div>
      </div>
      </div>
    </div>
  </section>
  
      </div>
        )
    )
}

export default withRouter(Error)
