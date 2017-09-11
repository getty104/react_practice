import React from 'react'

export default class App extends React.Component {
  render() {
    return <div>
      <h1>{this.props.fuga}</h1>
      <button onClick={ () => this.props.incrementhandleClick() }>増加</button>
      <button onClick={ () => this.props.decrementhandleClick() }>減少</button>
    </div>
  }
}
