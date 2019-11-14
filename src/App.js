import React from 'react';
import './App.css';
import { Game } from './components/game';

function App() {
  return (
    <div style={appStyle} >
      <h1>React Header</h1>
      <Game />
    </div>
  );
}

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
}

export default App;
