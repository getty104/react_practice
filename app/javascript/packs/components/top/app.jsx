import React from 'react'

export default class App extends React.Component {
  render() {
    return <div>
      <h1>{this.props.top.fuga}</h1>
      <button onClick={ () => this.props.incrementhandleClick() }>増加</button>
      <button onClick={ () => this.props.decrementhandleClick() }>減少</button>
      <button onClick={ () => this.props.mulhandleClick() }>積</button>
      <button onClick={ () => this.props.divhandleClick() }>商</button>
    </div>
  }
}
