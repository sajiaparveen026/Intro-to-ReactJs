import './App.css';
import ClassComponents from './components/ClassComponents';
import FunctionComponents from './components/FunctionComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>Class Components!!</p>
       <ClassComponents />
       <br/>

       <p>Function Components</p>
       <FunctionComponents />
      </header>
    </div>
  );
}

export default App;
