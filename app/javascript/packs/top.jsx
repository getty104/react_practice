import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect,  Link, NavLink, withRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {AppBar, IconButton, IconMenu, MenuItem} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


import Index from './containers/diaries/index'
import reducer from './reducers/root-reducer'

const store =   createStore(reducer)

render(
<Provider store={store}>
  <MuiThemeProvider>
    <div>
      <AppBar title="Diary"  iconElementLeft={
                     <IconMenu
                         iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                         anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                         targetOrigin={{horizontal: 'left', vertical: 'top'}}
                     >
                         <MenuItem primaryText="Index" href="#" />
                         <MenuItem primaryText="Form" href="#" />
                     </IconMenu>
                 }/>
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

