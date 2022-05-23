import React, {useEffect, useState} from "react";

function TestUseEffect () {

    const [a , setA] = useState("ABC");
    const [b, setB] = useState("ZYX");

    // componentDidMount and componentDidUpdate
    // useEffect(()=>{
    //     console.log("Hello Use effect hook")
    // })

    // componentDidMount
    // useEffect(()=>{
    //     console.log("Hello Use effect hook")
    // }, [])

    // in this case useEffect will work like componentDidMount and will work like componentDidUpdate for "a" state variable only.
    // useEffect(()=>{
    //     console.log("Hello Use effect hook")
    // }, [a])


    // componentDidMount, componentDidUpdate componentWillUnmount
    // useEffect(()=>{
    //     console.log("Inside useEffect hook");
    //     return ()=>{
    //         console.log("useEffect behaving like componentWillUnmount");
    //     }
    // }, [a,b])


    // componentWillUnmount,  : cleanup function in useEffect
    // useEffect(()=>{
    //     return function cleanup(){
    //         console.log("Cleanup function ");
    //     }
    // },[])



    // componentDidUpdate
    useEffect(()=>{
        return function cleanup(){
            console.log("Only Update");
        }
    },[a])

    return(
        <h1>
            This is useEffect Explanation
            <p>Value of a state variable = {a}</p>
            <p>Value of b state variable = {b}</p>
            <button onClick={()=>setA("QWE")}>Update a state value</button>
            <button onClick={()=>setB("RTY")}>Update b state value</button>
        </h1>
    )
}

export default TestUseEffect

// useEffect : 
// alternative of lifecycle methods like (which is present and can be used only and only in class based components)
// when you want to make server calls : 
// componentDidMount, componentDidUpdate, componentWillUnmount
// hook which accepts first parameter as a callback function, and second parameter is dependency array
// if you do not want that useEffect should run like a componentDidUpate then : pass an empty dependency array.
// How the useEffect can be executed like componentDidUpdate only for one state variable: pass the state variable for which you want to execute useEffect in the dependency array.
// clean up function : this function gets executed when the component is unmounted from the screen . This is mostly used for memory leaks  