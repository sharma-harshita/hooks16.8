import React , {useCallback, useMemo, useState} from "react";
import Child from "./Child";

const Parent = () => {
    const [parentNum, setParentNum] = useState(0);
    const [childNum, setChildNum] = useState(0);
    const [salaries, setSalaries] = useState([1000,290000,267666,5678,56789,4567890]);

    function findMax(){
        console.log("InsideFunction");
        return Math.max(...salaries)
    }

    function updateChild (){
        setChildNum(state=>state+1)
    }

    // const memoizedFindMax = useMemo(()=>findMax(),[salaries]);
    const callbackedChildNum = useCallback(()=>updateChild(),[childNum])
    return(
        <div>
            <h1>ParentComponent {parentNum}</h1>
            <button onClick={()=>setParentNum(state=>state+1)}>Click to increase parent num</button>
            {/* <Child num={childNum} changeChild= {updateChild}/> */}
            <Child num={childNum} changeChild= {callbackedChildNum}/>
            <h1>Max Value is {findMax()}</h1>
            <button onClick={()=>setSalaries([12345678,0,90000000000])}>Find Max Value</button>
        </div>
    )
}

export default Parent


// Over here if you will see that when we are updating the parent state variable value then also child component is getting rendered that is because if you are just sending variables like props then that issue can be fixed by using memo or by making child component as pure component
// but when you are sending function as a props then it falls under referential equality which means functions value will always be treated as new so the child component will always be rerendered . so to fix this we have to use useCallback hook . This hook memoize callback function. After this the child component will not be rerendered if only the parent component state is changing. and we can pass child component props value in dependency array that if the state value is changing in parent which we are passing as props to child then we will render the child component.


// Now we are having anothr function findMax, everytime when you will do any state updation in parent component this function will be called even when its input value is not changed. 
// so to fix this we have useMemo hook , it will memoize the calculation result of the function which we are passing as a callback to useMemo , until unless the the result or the dependency variable value is not changed. It will not be executed again.