import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';
import Timer from './Components/Timer';


function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>This is your demo project</p>
     <Welcome name='Amrutha'/>
     <Counter/>
     <Timer/>
    </div>
  );
}

export default App;
