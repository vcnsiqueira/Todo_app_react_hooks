import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Menu from './template/Menu';
import Routes from './routes/Routes';

const App = () => {
  return (
    <div>
      <Menu/>
      <div className='container-fluid'>
        <Routes />
      </div>
    </div> 
  );
}

export default App;
