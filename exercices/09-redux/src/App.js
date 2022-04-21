import './App.css';
import MainHeader from './containers/main-header/main-header';
import MainFooter from './containers/main-footer/main-footer';
import FullnameDisplay from './components/fullname-list/FullnameDisplay';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <FullnameDisplay/>
      <MainFooter />
    </div>
  );
}

export default App;
