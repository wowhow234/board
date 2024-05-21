import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Userform from './component/Userform';
import Home from './component/Home';
import Header from './component/Header';


function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userform" element={<Userform/>} />
    </Routes>

    </div>
  );
}

export default App;
