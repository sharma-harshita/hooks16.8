import './App.css';
import User from './components/User';
import Students from './components/Students';
import CompReducer from './components/CompReducer';
import Main  from './Main';
import React, {useEffect} from "react";

function App() {
  return (
    <div className="App">
        <Students/>
    </div>
  );
}

export default App;

// HOC
// pure components
// dumb components or stateless components
// smart components or stateful components