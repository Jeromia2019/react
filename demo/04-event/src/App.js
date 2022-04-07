import './App.css';
import DayNight from './components/day-night/day-night';
import CalculateNb from './components/calculate-number/calculate-number';
import MultiNbClass from './components/multi-nb-class/multi-nb-class';

function App() {
  return (
    <div className="App">
      <h1>Demo - event (state)</h1>
      <DayNight/>
      <CalculateNb number={2}/>
      <MultiNbClass multiplier={3}/>
    </div>
  );
}

export default App;
