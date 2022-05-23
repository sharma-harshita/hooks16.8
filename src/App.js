import './App.css';
import React, {useState} from "react";
import UseContextHook from './Hooks/Context/useContextHook';
import UserContextProvider from './Hooks/Context/UserContext';
import TestUseEffect from './Hooks/useEffectHooks';
import Test from './Hooks/useStateHook';

function App() {

  const [showComp , setShowComp] = useState(true);

  return (
    <div className="App">
       {/* <Test/>
       {showComp ? <TestUseEffect/> : null}
       <button onClick={()=>setShowComp(false)}>Unmount useEffect Component</button>
      <UserContextProvider>
       <UseContextHook/>
      </UserContextProvider> */}
      {/* <Test/> */}
      <TestUseEffect/>
    </div>
  );
}


export default App;

// HOC
// pure components
// dumb components or stateless components
// smart components or stateful components