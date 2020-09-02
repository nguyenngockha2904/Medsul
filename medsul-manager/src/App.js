import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Layouts/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
