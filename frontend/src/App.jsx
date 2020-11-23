import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import Todo from './components/Todo/Todo';
import About from './components/About/About';
import Menu from './template/Menu';

const App = () => {
  return (
    <div className='container'>
      <Menu />
      <About />
      <Todo />
    </div>
  );
}

export default App;
