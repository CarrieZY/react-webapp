import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/index'
import Order from './pages/Order/index'
import Mine from './pages/Mine/index'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route to='/' exact component={Home}></Route>
        <Route to='/Order' component={Order}></Route>
        <Route to='/Mine' component={Mine}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
