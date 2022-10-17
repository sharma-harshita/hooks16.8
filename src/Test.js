import React from "react";
import PropTypes from "prop-types";

function TestChild(props){
    return(
        <div>
            Test component
            {props.name}
            {props.age}
        </div>
    )
}


TestChild.propTypes={
    name:PropTypes.string, 
    age:PropTypes.element.isRequired    //prop must be coming from parent
    //prop that I am receiving through main component should be of string type
}
export default TestChild