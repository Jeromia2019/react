
import './App.css';
import FormExo from './components/forms-exo/forms-exo';
import FormExoProf from './components/forms-exo/forms-exo-prof';

function App() {
  return (
    <div className="App">
      <h1>Mon exercice</h1>
      <FormExo />
      <h1>Exercice prof</h1>
      <FormExoProf />
    </div>
  );
}

export default App;
