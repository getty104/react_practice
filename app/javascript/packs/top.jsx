import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect,  Link, NavLink, withRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import Index from './containers/diaries/index'
import reducer from './reducers/root-reducer'

const store =   createStore(reducer)

render(
<Provider store={store}>
  <Router>
    <Switch>
      <Route path="/" component={Index}>
      </Route>
    </Switch>
  </Router>
</Provider>,
document.body
)

