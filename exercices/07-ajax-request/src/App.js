
import './App.css';
import MeteoCorrection from './components/correction/MeteoCorrection';
import DemoAgify from './components/Demo/DemoAgify';
import Recherche from './components/Recherche/Recherche';
import MainFooter from './containers/main-footer/main-footer';
import MainHeader from './containers/main-header/main-header';

function App() {
  return (
    <div className="App">
      <MainHeader />
      {/* <DemoAgify/>
      <Recherche /> */}
      <MeteoCorrection />
      <MainFooter />
    </div>
  );
}

export default App;
