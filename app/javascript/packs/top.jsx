import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect,  Link, NavLink, withRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import Index from './containers/diaries/index'
import reducer from './reducers/root-reducer'

const store =   createStore(reducer)

render(
<Provider store={store}>
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
      <AppBar title="Diary" />
      <Router>
        <Switch>
          <Route path="/" component={Index}>
          </Route>
        </Switch>
      </Router>
    </div>
  </MuiThemeProvider>
</Provider>,
       document.body.appendChild(document.createElement('div'))
       )

