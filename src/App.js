import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CatsIndex from './components/cats/CatsIndex'
import CatShow from './components/cats/CatShow'
import Home from './components/common/home'


function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path = "/"> 
        <Home />
      </Route> 
      <Route path = "/cats">
        <CatsIndex/>
      </Route> 
      <Route path = "/cats/:catId"> 
        <CatShow />
      </Route> 
      </Switch>
    </BrowserRouter>
  )
}

export default App
