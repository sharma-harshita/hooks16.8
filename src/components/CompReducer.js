import React, {useReducer, useRef} from "react";

const CompReducer = () => {

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
    
    // const nameRef = useRef("Harshita");

    // const handleSubmit = () =>{
    //     console.log(nameRef.current);
    // }

    const headingRef = useRef(null);

    const handleClick = () => {
        headingRef.current.style.color = "red";
    };

    return(
        <>
            <h1>{state}</h1>
            <button onClick={()=>{dispatch({type:"INC"})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"DEC"})}}>Decrement</button>

            {/* <input id="name" value= "" type="text" ref={nameRef}/>
            <button onClick={handleSubmit()}>CLick to submit input</button> */}
            <div>
            <h1 ref={headingRef}>Name</h1>
            <button onClick={handleClick}>change heading color </button>
            </div>
        </>
    )
}

export default CompReducer