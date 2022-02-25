import React , {memo} from "react";

const Child = (props) => {

    console.log("This is child");
    return(
        <div>
            <h1>ChildComponent {props.num}</h1>
            <button onClick={props.changeChild}>Click to change child value</button>
        </div>
    )
}

export default memo(Child)