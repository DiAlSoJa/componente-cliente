import React, {useEffect } from 'react';

import './App.css';
import Router from './router/Router';
import Footer from './components/Footer/Footer';
function App() {
  useEffect(() => {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);


  return (
    <>
      <div className="container">
        <Router/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
