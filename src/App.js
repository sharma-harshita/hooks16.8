import './App.css';
import React, {useState} from "react";
import UseContextHook from './Hooks/Context/useContextHook';
import UserContextProvider from './Hooks/Context/UserContext';
import TestUseEffect from './Hooks/useEffectHooks';
import Test from './Hooks/useStateHook';
import UseReducerHook from './Hooks/useReducerHook';
import UseRefHook from './Hooks/useRefHook';
import Temp from './Temp';

function App() {

  const [showComp , setShowComp] = useState(true);
  const [a , setA] = useState(12);

  return (
    <div className="App">
       {/* <Test/>
       {showComp ? <TestUseEffect/> : null}
       <button onClick={()=>setShowComp(false)}>Unmount useEffect Component</button>
      <UserContextProvider>
       <UseContextHook/>
      </UserContextProvider> */}
      {/* <Test/> */}
      {/* <TestUseEffect/> */}
      {/* <UseReducerHook/> */}
      {/* <UseRefHook/> */}
      {a}
      <br/>
      <button onClick={()=>setA(120)}>Change state</button>
      <Temp name="John"/>
    </div>
  );
}


export default App;

// HOC
// pure components
// dumb components or stateless components
// smart components or stateful components