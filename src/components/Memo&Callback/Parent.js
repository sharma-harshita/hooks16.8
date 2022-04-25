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

    const memoizedFindMax = useMemo(()=>findMax(),[salaries]);
    return(
        <div>
            <h1>ParentComponent {parentNum}</h1>
            <button onClick={()=>setParentNum(state=>state+1)}>Click to increase parent num</button>
            <Child num={childNum} changeChild= {useCallback(()=>setChildNum(state=>state+1),[childNum])}/>
            <h1>Max Value is {memoizedFindMax}</h1>
            <button onClick={()=>setSalaries([12345678,0,90000000000])}>Find Max Value</button>
        </div>
    )
}

export default Parent