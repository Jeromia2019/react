import logo from './logo.svg';
import './App.css';
import Welcome, { Goodbye } from './components/welcome/welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>♥ Hello Mia ♥</h1>
        <Welcome firstname="Mia" lastname="(° ͜ʖ͡°) ♥" />
        <Goodbye firstname="Jérôme" lastname="(-_-)╭∩╮" />
      </header>
    </div>
  );
}

export default App;
