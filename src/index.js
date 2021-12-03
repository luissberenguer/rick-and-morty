import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContext from './context/ThemeContext'

ReactDOM.render(
  <ThemeContext.Provider value="#34495E">
      <App />
  </ThemeContext.Provider>,
  document.getElementById('root')
);

