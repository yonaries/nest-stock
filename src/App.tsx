import React from 'react';
import './App.css';
import Dashboard from './view/screens/dashboard';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
