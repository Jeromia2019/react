import logo from './logo.svg';
import './App.css';
// D'habitude on importe un seul module d'un seul fichier
import Welcome, { Goodbye } from './components/welcome/welcome';

function App() {
  // les valeurs a l'intérieur des {} sont interprettées comme du code js.
  return (
    <div className='App'>
      <header className='App-header'>
        <Welcome firstname=' Mia' lastname={`♥`} num={42} />
        <img src={logo} className='App-logo' alt='logo' />
        <Goodbye firstname='Guillaume' lastname='(° ͜ʖ͡°)╭∩╮ :' />
      </header>
    </div>
  );
}

export default App;
