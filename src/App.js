import React from 'react';
import logo from './logo.svg';
import './App.css';
import logements from './data/logements.json'; // Importer le fichier JSON

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bonjour
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1>Liste des logements</h1>
        <ul>
          {logements.map((logement) => (
            <li key={logement.id}>
              {logement.title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
