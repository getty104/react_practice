import React from 'react'
import { connect } from 'react-redux'

import Component from '../../components/diaries/index'
import Action from '../../actions/diaries/index'

function mapStateToProps(state) {
  return state
}

function DispatchToProps(dispatch) {
  return {
    nextPage: () => { dispatch(Action.next()) },
    backPage: () => { dispatch(Action.back()) }
  }
}

export default connect(mapStateToProps, DispatchToProps)(Component)
