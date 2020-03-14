import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail'
import { Router } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container text-center p-4">
      <Router>
        <Main path="/*" />
      </Router>
    </div>
  );
}

export default App;
