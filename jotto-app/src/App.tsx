import React from 'react';
import logo from './logo.svg';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

function App() {
  return (
    <div className="App">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{ guessedWord: 'traing', letterMatchCount: 3 }]} />
    </div>
  );
}

export default App;
