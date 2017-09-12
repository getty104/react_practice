import React from 'react'

export default class Index extends React.Component {
  render() {
    return <div>
     <h1>Hello!</h1>
      <button onClick={ () => this.props.nextPage() }>次ページ</button>
      <button onClick={ () => this.props.backPage() }>前ページ</button>
    </div>
  }
}
