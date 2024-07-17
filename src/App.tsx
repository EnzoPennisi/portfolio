import { NavBar } from './components/navbar/NavBar';
import { Home } from './components/home/Home';
import { Contacto } from './components/contacto/Contacto';
import { BrowserRouter as Router } from 'react-router-dom';
import { Portfolio } from './components/proyectos/Portfolio';
import { Footer } from './components/footer/Footer';
import './components/i18next/i18n.ts'

function App() {
  return (
    <Router>
      <NavBar />
      <div id="home">
        <Home />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contacto">
        <Contacto />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
