import DayNight from './components/day-night/day-night';
import CalculateNb from './components/multi-number/multi-number';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Demo - event</h1>
      <DayNight/>
      <CalculateNb number={2}/>
    </div>
  );
}

export default App;
