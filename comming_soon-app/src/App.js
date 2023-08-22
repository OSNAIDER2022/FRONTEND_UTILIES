import './scss/App.scss';
import Counter from './components/Counter';
import background2 from './assets/background3.mp4'


function App() {
  return (
    <div className="App">
      <video src={background2} autoPlay muted loop className='videoBg'></video>
      <header className='header'>
        <p>estamos trabajando para brindarte la mejor experiencia</p>
      </header>

      <div className='context'>
      
        <h1>NOMBRE DE LA EMPRESA</h1>
        <p>Proximo lanzamiento oficial</p>
        {<Counter></Counter>}
      </div>

      <footer className='footer'>
        <p>todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
