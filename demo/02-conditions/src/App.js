import './App.css';
import NbEven from './components/odd-even/odd-even';
import Person from './components/person/person';

function App() {
  return (
    <div className="App">
      <h1>Demo Conditions</h1>
      <NbEven number={13}/>
      <Person />
      <Person name="Mia♥" hobby="d'aimer Jérôme ♥"/>
    </div>
  );
}

export default App;
