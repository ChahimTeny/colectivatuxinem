import './assets/css/App.css';

/* importamos los componentes */
import Borde from './components/Inicio/Home';
import Services from './components/Inicio/Fundadoras/fundadoras';
import Nosotras from './components/Nosotras/Nosotras';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <section className='components'>
        <Borde/>
        <Services/>
        <Nosotras/>
        <Contacto/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
