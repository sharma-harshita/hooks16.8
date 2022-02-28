import React, { useEffect } from "react";
import axios  from "axios";

const MainPage = () => {

    const token = localStorage.getItem("jwtToken");
    useEffect(()=>{
        axios.get("http://localhost:8000/user", {headers:{"Authorization": `Bearer ${token}`}}).then((res)=>{
            console.log(res);
        })
    }, [])

    return(
        <div>
            Main Page
        </div>
    )
}

export default MainPage

