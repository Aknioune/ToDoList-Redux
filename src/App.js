import React from 'react';
import './App.css';
import AddTask from './compenent/addtask';
import ListTask from './compenent/listtask';

function App() {
  return (
    <div className="app">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;