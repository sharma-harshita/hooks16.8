import './App.css';
import React, {useState, useEffect} from "react";
import TestUseEffect from './Hooks/useEffectHooks';

function App() {

  const [showComp , setShowComp] = useState(true);

  return (
    <div className="App">
       {/* <Test/> */}
       {showComp ? <TestUseEffect/> : null}
       <button onClick={()=>setShowComp(false)}>Unmount useEffect Component</button>
    </div>
  );
}


export default App;

// HOC
// pure components
// dumb components or stateless components
// smart components or stateful components