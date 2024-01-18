import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import Strona2 from './Pages/Strona2';
import { Layout } from './Layout';
import  Strona3  from './Strona3'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Strona2" element={<Strona2 />} />
          <Route path='/Strona3' element={<Strona3/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;