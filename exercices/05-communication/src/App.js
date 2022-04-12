
import './App.css';
import MainHeader from './containers/Main/MainHeader';
import MainFooter from './containers/Main/MainFooter';
// import ToDoList from './components/ToDoList/ToDoList';
import ToDoListProf from './containers/ToDoList-prof/ToDoListProf'

function App() {
  return (
    <div className='App'>
    <MainHeader/>
      <main>
        {/* <ToDoList/> */}
        <ToDoListProf />
      </main>
    <MainFooter />
    </div>
  );
}

export default App;
