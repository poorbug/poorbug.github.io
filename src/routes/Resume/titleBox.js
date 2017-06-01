import React from 'react'

export default class TitleBox extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <div>
        <h3>{title}</h3>
        <div data-role='==='/>
        { children }
      </div>
    )
  }
}
