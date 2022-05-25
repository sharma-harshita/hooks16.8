import React from "react";

// class Temp extends React.PureComponent{
//     render(){
//         console.log("Hey Temp");
//         return(
//             <div>
//                 {this.props.name}
//             </div>
//         )
//     }
// }



function Temp (props){   
    console.log("hey temo");
    return(
        <div>
            Hello {props.name}
        </div>
    )
}

export default React.memo(Temp)
