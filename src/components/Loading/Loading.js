import React from "react";
import './Loading.scss'
const Loading=()=> {
    return ( 
      <div className="loadbody"> 
          <div class="wrapper">
    <div class="box-wrap">
        <div class="box one"></div>
        <div class="box two"></div>
        <div class="box three"></div>
        <div class="box four"></div>
        <div class="box five"></div>
        <div class="box six"></div>
    </div>
    <h3 style={{"width":"200px"}}>Please wait.......</h3>
</div>                    
      </div>
    )    
    }
export default Loading;
