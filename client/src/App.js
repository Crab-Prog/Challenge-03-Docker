import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          On edite <code>src/App.js</code> on sauvegarde et ca reload.
        </p>
        <p>Ca fonctionne</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Venez apprendre Docker avec la Wild
        </a>
      </header>
    </div>
  );
}

export default App;
