import React, {useReducer} from "react";

export default CompReducer = () => {

    const reducer = (state, action) => {

        switch (action.type) {
            case "INC":
                return state+1;
            case "DEC":
                return state-1;
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, 0);
    
    return(
        <>
            <h1>{state}</h1>
            <button onClick={()=>{dispatch({type:"INC"})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"DEC"})}}>Decrement</button>
        </>
    )
}