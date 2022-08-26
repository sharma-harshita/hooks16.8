import React, { useState, useRef }  from "react";
import ForwardRef from "./ForwardRef";

function UseRefHook (){
    console.log("Rendered");
    const [a, setA] = useState();
    const aRef = useRef()
    return(
        <div>
            <h1>This is the explanation of useRef Hook</h1>
            <h2>{a}</h2>
            {/* <input type="text" value={a} onChange={(e)=>setA(e.target.value)}/> */}

            {/* Soultion by using useRef hook */}
            <input type="text" ref={aRef} />
            <button onClick={()=>setA(aRef.current.value)}>SetValue</button>
            
            {a &&  <ForwardRef ref={aRef}/>}
        </div>
    )
}


// In this case we have created a state variable and assigned its value to a input field , now we want that input value should be updated every time but it should not cause rendering every time. So when we update the state in component it causes render of component.
// to avoid this we can use useRef hook
// it returns a value which is not mutable 
// a component using useRef hook also known as uncontrolled component because in this case the changes happening on the dom is not controlled by the state variable
export default UseRefHook