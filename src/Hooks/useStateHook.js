import React from "react";           //default imported
import {useState, useEffect} from "react";     //named imported

function Test (){ 

    const [name, setName] = useState("John");
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({name: "John", age:32})

    // returns a state variable and a function using which you can update the state value. because we do not have setState function in functional components., Also it will take the initial value of the state variable.

    // named function : variable whose value is equal to a function
    // const updateState = function(){

    // }

    // arrow function 
    const updateState = () => {
        setName("Doe");
    }

    const updateObjState = () => {
        setUser(prevState=>{
            return({
                ...prevState,
                age : 43
            })
        })
    }

    return(
        <>
            <h1>Understanding HOOKS !!!</h1>
            <h2>useState, useEffect and useContext</h2>
            <h2>useReducer, useCallback, useMemo, memo, useRef</h2>
            <p>State variable name : {name}</p>
            <button onClick={updateState}>Click to update the state variable</button>
            <br/>
            <button onClick={()=>setName("Ram")}>Click to update the state variable using arrow function</button>
            <p>State count variable {count}</p>
            <button onClick={()=>setCount(prevState=>prevState+1)}>Update the state count variable by using prev state</button>
            <p>State as an object. {user.name}</p>
            <p>State as an object. {user.age}</p>
            <button onClick={updateObjState}>Click to update object state variable value</button>
        </>
    )
}

export default Test


// useState 
// definition, structure
// how to use the state variable in dom
// update the state variable -> by creating a separate function and by writing in the same line
// prevState concept 
// This prevState is required when you want to use the initial value or the last value of the state when you are updating the new state variable value.
//  alternative of creating state variables in functional component