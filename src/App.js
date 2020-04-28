import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import './App.css';

const Loader = x => Loadable({
  loading: () => 'Loading...',
  loader: x
})

const Prueba = Loader(() => import('./components/Prueba'))
const Invoices = Loader(() => import('./components/Invoices'))

class App extends Component {

  render () {
    return (
      <div className="App">
       <Route exact path="/" component={ Prueba }/>
       <Route exact path="/invoices" component={ Invoices }/>
      </div>
    )
  }
}

export default App
