import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Results from './components/Results'
import Home from './components/Home'
import About from './components/About'
import Help from './components/Help'

import './index.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/help' component={Help}/>
      <Route path='/results' component={Results}/>
      <Route path='/results/:keyword' component={Results}/>
    </Route>
  </Router>
),document.getElementById('root')
)
