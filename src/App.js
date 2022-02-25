import './App.css';
import User from './components/User';
import Students from './components/Students';
import CompReducer from './components/CompReducer';
import Main  from './Main';
import React, {useEffect} from "react";
import Parent from './components/Memo&Callback/Parent';

function App() {
  return (
    <div className="App">
        {/* <Students/> */}
        <Parent/>
    </div>
  );
}

export default App;

// HOC
// pure components
// dumb components or stateless components
// smart components or stateful components