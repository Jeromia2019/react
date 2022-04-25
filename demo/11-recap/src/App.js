import './App.css';
import MainFooter from './containers/main-footer/main-footer';
import MainHeader from './containers/main-header/main-header';
import { Container, CssBaseline } from '@mui/material'; 
import { useRoutes } from 'react-router-dom';
import { appRoute } from './routes';

function App() {

  const routes = useRoutes(appRoute)

  return (
    <div className="App">
      <CssBaseline />
      <MainHeader />
        <Container>
          {routes}
        </Container>
      <MainFooter />
    </div>
  );
}

export default App;
