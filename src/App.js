import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Notification from './pages/notification';
import PokemonChart from './pages/pokemonChart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/pokemonchart" element={<PokemonChart />} />
    </Routes>
  );
}

export default App;

/*
import React from 'react';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
*/
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
*/