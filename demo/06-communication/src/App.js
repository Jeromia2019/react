import './App.css';
import Counter from './components/counter/counter';
import MainHeader from './containers/main-header/main-header';

const App = () => {
  return (
    <div className="App">
      <h1>Demo 06 - Communication</h1>
      <MainHeader />
      <Counter />
    </div>
  );
};

export default App;