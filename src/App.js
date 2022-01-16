import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './style.css';
import { NavBar } from './componentes/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer getting={'HOME'}/>
        </Route>

        <Route exact path="/categoria/:catId">
          <ItemListContainer getting={'FILTRADO'}/>
        </Route>

        <Route exact path="/product/:itemId">
          <ItemDetailContainer/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
