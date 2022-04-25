import './App.css';
import User from './components/User';
import Students from './components/Students';
import CompReducer from './components/CompReducer';
import Main  from './Main';
import React, {useEffect} from "react";
import Parent from './components/Memo&Callback/Parent';
import Login from './components/Login-Auth/Login';
import Socket from './components/Socket/Socket';
import Test from './Hooks/useStateHook';

function App() {
  return (
    <div className="App">
        {/* <Login/>
        <Socket/> */}
        <Test/>
    </div>
  );
}

export default App;

// HOC
// pure components
// dumb components or stateless components
// smart components or stateful components