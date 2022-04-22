import './App.css';
import MainHeader from './containers/main-header/main-header';
import MainFooter from './containers/main-footer/main-footer';
import CounterDisplay from './components/counter/CounterDisplay';
import Counter from './components/counter/Counter';
import CounterReset from './components/counter/CounterReset';
import UserForm from './components/user/UserForm';
import UserList from './components/user/UserList';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <h2>Compteur</h2>
      <CounterDisplay />
      <Counter />
      <Counter step={5} />
      <CounterReset />
      <hr />
      <h2>Liste utilisateurs</h2>
      <UserForm />
      <UserList />
      </main>
      <MainFooter />
    </div>
  );
}

export default App;
