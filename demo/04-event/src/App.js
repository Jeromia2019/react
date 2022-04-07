import DayNight from './components/day-night/day-night';
import MultiNumber from './components/multi-number/multi-number';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Demo - event</h1>
      <DayNight/>
      <MultiNumber multiplier={2}/>
    </div>
  );
}

export default App;
