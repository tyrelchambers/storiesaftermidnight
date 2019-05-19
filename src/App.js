import React from 'react';
import './App.scss';
import Hero from './layouts/Hero/Hero';
import HumbleBundles from './layouts/HumbleBundles/HumbleBundles';
import Footer from './layouts/Footer/Footer';
import GetStats from './components/GetStats/GetStats';

function App() {
  return (
    <div className="App">
      <Hero />
      <GetStats />
      <HumbleBundles />
      <Footer/>
    </div>
  );
}

export default App;
