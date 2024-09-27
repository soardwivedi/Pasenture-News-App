import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AppRoutes from './routes/routes';
import Navigations from './components/Navigations';

function App() {
  return (
    <Router>
      <Container>
        <Navigations />
        <AppRoutes />
      </Container>
    </Router>
  );
}

export default App;
