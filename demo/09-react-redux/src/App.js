import './App.css';
import MainHeader from './containers/main-header/main-header';
import MainFooter from './containers/main-footer/main-footer';
import CounterDisplay from './components/counter/CounterDisplay';
import Counter from './components/counter/Counter';
import CounterReset from './components/counter/CounterReset';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
      <CounterDisplay />
      <Counter />
      <Counter step={5} />
      <CounterReset />
      </main>
      <MainFooter />
    </div>
  );
}

export default App;
