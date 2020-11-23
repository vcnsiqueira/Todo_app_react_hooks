import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import Todo from './components/Todo/Todo';
import About from './components/About/About';

const App = () => {
  return (
    <div className='container'>
      <About />
      <Todo />
    </div>
  );
}

export default App;
