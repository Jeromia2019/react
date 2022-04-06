
import './App.css';
import ProductsList from './components/products-list';
import productsData from './data/products.json'

function App() {
  return (
    <div className="App">
      <h1>Exercice : Liste de produits</h1>
      < ProductsList produits={productsData} />
    </div>
  );
}

export default App;
