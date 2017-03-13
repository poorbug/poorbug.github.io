import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class Marked extends React.Component {
  componentWillMount() {
    console.log(this.props.children)
  }
  render() {
    return (
      <ReactMarkdown source={this.props.children} style={{ whiteSpace: 'pre-wrap'}}/>
    )
  }
}