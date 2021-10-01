import React  from 'react';
import v from './First.module.css';
import { withRouter } from "react-router-dom";
import CarouselPage from '../CarouselPage';
import Button from '@material-ui/core/Button'
import VpnKey from '@material-ui/icons/VpnKey'

function First(props) {
    return (
        
        <div> 
        <div className={v.headtitle}>Bank Management
        <Button className={`btn btn-primary ${v.login}`}
        style={{"margin-top":"6px",
          "margin-right":"30px"}}
        variant="contained"
        color="primary"
          type="submit" 
          endIcon={<VpnKey/>}
        onClick={() => props.history.push('/login')}
        >Login</Button>
        <CarouselPage/>
        </div>
        </div> 
        
        );
}
export default withRouter(First);