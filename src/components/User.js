import React, { useEffect, useState } from 'react';
import LoginHOC from '../LoginHOC';

const User = () => {

    const [userName , setUserName] = useState(" ");
    const [userAge , setUserAge] = useState(24);
    const [userSalary , setUserSalary] = useState(24000);

    useEffect(()=>{
        console.log("Inside useEffect hook");
    },[userAge])
    
    return(
        <div>
            <h1>HOOKS - useState and useEffect</h1>
            Hello {userName}
            <button onClick={()=>setUserName("Students")}>Set User name</button>
            <br/>
            {userAge}
            <button onClick={()=>setUserAge(30)}>Set User Age</button>
            <br/>
            {userSalary}
            <button onClick={()=>setUserSalary(30000)}>Set User Salary</button>
        </div>
    )
}

export default LoginHOC(User);