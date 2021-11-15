import './App.css';
import User from './components/User';
import Students from './components/Students';

function App() {
  return (
    <div className="App">
      Hello World !!
      {/* <User/> */}
      <Students/>
    </div>
  );
}

export default App;

// HOC
// pure components
// dumb components or stateless components
// smart components or stateful components