import React from 'react'
import { connect } from 'react-redux'

import App from '../../components/top/app'
import Execution from '../../actions/top/app'

function mapStateToProps(state) {
  return state
}

function DispatchToProps(dispatch) {
  return {
    incrementhandleClick: () => { dispatch(Execution.increment()) },
    decrementhandleClick: () => { dispatch(Execution.decrement()) },
    mulhandleClick: () => { dispatch(Execution.mul()) },
    divhandleClick: () => { dispatch(Execution.div()) }
  }
}

export default connect(mapStateToProps, DispatchToProps)(App)
