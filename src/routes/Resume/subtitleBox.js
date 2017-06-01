import React from 'react'

export default class SubtitleBox extends React.Component {
  render() {
    const { title, children, link } = this.props
    return (
      <div>
        { !link && <h5>{title}</h5> }
        { !!link && <h5><a href={link}>{title}</a></h5> }
        <ul>
          { children }
        </ul>
      </div>
    )
  }
}
