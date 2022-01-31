import './App.css';
import User from './components/User';
import Students from './components/Students';
import CompReducer from './components/CompReducer';
import Main  from './Main';

function App() {
  return (
    <div className="App">
      Hello World !!
      {/* <Students/>
      <User/>
      <CompReducer/> */}
      <Main/>
    </div>
  );
}

export default App;

// HOC
// pure components
// dumb components or stateless components
// smart components or stateful components