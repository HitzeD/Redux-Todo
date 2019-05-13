import React from 'react';
import './App.css';

import List from './components/List';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Accomplished Me..." />
      <button>Add Item</button>
      <List />
    </div>
  );
}

export default App;
