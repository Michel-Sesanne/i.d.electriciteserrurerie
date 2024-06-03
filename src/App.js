import logo from './IDELEC.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="text">
          <h1>
            Electricien et Serrurier Avignon et ses alentours
          </h1>
          <p>
            Installation - Réparation
          </p>
          <p>
            Dépannage 7j/24h
          </p>                
        </div>
        <i className="fa-solid fa-phone"></i>
        <a
          className="App-link"
          href="tel:0033634826527"
          aria-label=" 06 34 82 65 27"
        >
          <span>06 34 82 65 27</span>
        </a>
      </header>
    </div>
  );
}

export default App;
