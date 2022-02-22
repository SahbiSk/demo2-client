import React from 'react';
import './assets/sass/common.scss';
import { RoutesList } from 'routes';
import Snackbar from 'modules/Snackbar/snackbar.component';

function App() {
  return (
    <div className="App">
      <RoutesList />
      <Snackbar />
    </div>
  );
}

export default App;
