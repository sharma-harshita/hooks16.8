import React from "react";

const LoginHOC = (WrappedComponent) => {

    const name = "Students";

    const email = localStorage.getItem("email") || "abc@email.com";
    const jwtToken = localStorage.getItem("jwtToken") ;
    return () =>{
        return(
            <div>
                <WrappedComponent loggedIn={"true"}/>
            </div>
        )
    }
}

export default LoginHOC