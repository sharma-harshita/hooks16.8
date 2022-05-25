import React, {useReducer} from "react";

function UseReducerHook (){

    const updateState = (state, action) => {
        switch (action.type) {
            case "CHANGE_AGE":
                return {...state, age:43};
            case "CHANGE_NAME":
                return {...state, name:"DOE"};
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(updateState, {id:1, name:"John", age:32})

    return(
        <>
            <h1>This is explanation of useReducer Hook</h1>
            <h2>User Info {state.name} || {state.age}</h2>
            <button onClick={()=> dispatch({type:"CHANGE_AGE"})}>Change age</button>
            <button onClick={()=> dispatch({type:"CHANGE_NAME"})}>Change name</button>
        </>
    )
}

export default UseReducerHook

// why ? 
// useState v/s useReducer
// useState hook is easy to use when you are having primitive data types like number, string, etc. It is still fine to useState at some point for the non-primitive data types like objects when these objects are having 3 - 4 key value pairs
// But generally we will be having big complex objects containing lotz of key-value pairs so to update the state , prevState concept becomes complex,
// and then to make it easy we use useReducer hook . 
// useReducer : it takes two arguments : state , reducer function 
// this reducer function will be responsible to update the state variable.
// this reducer function takes two parameters state and action....
// useReducer is a hook which will return state and function to update that state variable that is dispatch. these variables will be used to access state and action in dom
// and it will take two params i.e. reducer function and initial state value.