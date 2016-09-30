import React from 'react'

export default class Typewriter extends React.Component {
  componentDidMount() {
    const screen = this.refs.screen
    const content = screen.innerHTML
    let position = 0
    screen.innerHTML = ''
    const interval = setInterval(()=>{
      const curChar = content.substr(position, 1)
      if(curChar === '<') 
        position = content.indexOf('>', position) + 1
      else
        position++
      screen.innerHTML = content.substring(0, position) + (position & 1 ? '_' : '')
      if(position >= content.length)
        clearInterval(interval)
    }, 10)
  }

  render() {
    return (
      <div ref='screen' className={this.props.className}>
        { this.props.children }
      </div>
    )
  }
}
