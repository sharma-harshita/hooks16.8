import React, { useEffect } from "react";
import axios  from "axios";
import MainPage from "./MainPage";


const Login = () => {

    useEffect(()=>{
        axios.post("http://localhost:8000/login", {email:"h@email.com", password:"123"}).then((res)=>{
            localStorage.setItem("jwtToken", res.data.jwtToken)
        })
    }, [])

    return(
        <div>
            <MainPage/>
        </div>
    )
}

export default Login