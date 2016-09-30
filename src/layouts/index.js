import React from 'react'
import s from 'styles/core'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
