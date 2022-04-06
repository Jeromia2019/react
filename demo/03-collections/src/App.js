import './App.css';
import StudentTable from './components/student-table/studentTable';

// Donnée statique (JSON)
import studentsData from './data/students.json'

function App() {
  return (
    <div className="App">
      <h1>Demo - Collections</h1>
      <StudentTable students={studentsData}/>
    </div>
  );
}

export default App;
