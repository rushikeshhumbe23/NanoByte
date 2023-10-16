import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import MainRoutes from './Routes/MainRoutes';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
