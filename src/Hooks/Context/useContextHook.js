import React, {useContext} from "react";
import {UserContext} from "./UserContext";


const UseContextHook = () => {

    const [user, setUsers] = useContext(UserContext);

    const updateAge = () => {
        setUsers(prevState=>{
            return{
                ...prevState,
                age: 40
            }
        })
    }
    
    return(
        <>
            <h1>This is the explanation of useContext Hook</h1>
            <h2>{user.name} || {user.age} || {user.dept} || {user.salary}</h2>

            <button onClick={updateAge}>Click to update age</button>
        </>
    )
}

export default UseContextHook

// useContext :
// this hook is used to use the context api. 
// props drilling : If you have four components , and you need to pass the data from one comp to second then to third then to fourth comp. But this data will be used only in first and fourth comp. So over here second and third comp is having or receiving props data which they are not even using . this is known as props drilling. 
// Soultion of props drilling : Context API.
// Context API : Lets you store the data at a single place and then in whatsoever component you want to receive the data you need to make sure that the component is wrapped with the context api. 
// Now to use the context api data in the component you need useContext hook.