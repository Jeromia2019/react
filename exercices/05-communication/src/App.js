
import './App.css';
import MainHeader from './components/containers/Main/MainHeader';
import MainFooter from './components/containers/Main/MainFooter';
// import ToDoList from './components/ToDoList/ToDoList';
import ToDoListProf from './components/./containers/ToDoList-prof/ToDoListProf'

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
