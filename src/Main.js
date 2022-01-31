import React from "react";
import User from "./components/User";
import LoginHOC from "./LoginHOC";

function Main (props){
    const value = props;
    return(
        <div>
            { 
            value.loggedIn ===true
             ? 
                <div>Success</div>
             :
                <div>Failue</div>
            }
        </div>
    )
}

export default LoginHOC(Main)