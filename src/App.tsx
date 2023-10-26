import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './compornents/Header';
import Main from './compornents/Main';
import Footer from './compornents/Footer';
import Contact from './compornents/Contact';

function App() {
  return (
    <Router>
       <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
