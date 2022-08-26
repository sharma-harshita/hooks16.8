import React, {forwardRef} from "react";

function ForwardRef(props, ref){
    console.log(ref);
    return(
        <div>
            "forward ref"
            {ref.current.value}
        </div>
    )
}

export default forwardRef(ForwardRef)