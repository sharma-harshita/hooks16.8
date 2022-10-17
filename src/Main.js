import React from "react";
import TestChild from "./Test";

function Main (){
    return(
        <div>
            Main component
            <TestChild  name={"Harsh"} age={24}/>
        </div>
    )
}

export default (Main)