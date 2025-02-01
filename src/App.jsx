import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Asosiy from './components/asosiy.jsx';
import Bizhaqimizda from './components/bizhaqimizda.jsx';
import Bizningjamoa from './components/bizningjamoa.jsx';
import Turlar from './components/turlar.jsx';
import Mexmonxonalar from './components/mexmonxonalar.jsx';
import Aviachiptalar from './components/aviachiptalar.jsx';
import Mashxurshaharlar from './components/mashxurshaharlar.jsx';
import Hamkorlarimiz from './components/hamkorlarimiz.jsx';
import Bizbilanboglanish from './components/bizbilanboglanish.jsx';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto">
       
        <Asosiy />
        <Bizhaqimizda />
        <Bizningjamoa />
        <Turlar />
        <Mexmonxonalar />
        <Aviachiptalar />
        <Mashxurshaharlar />
        <Hamkorlarimiz />
        <Bizbilanboglanish />
      </div>
    </Router>
  );
}

export default App;
