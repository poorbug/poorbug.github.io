import React from 'react'
import s from './cite.style'

export default class Cite extends React.Component {
  render() {
    const { name, msg } = this.props
    return (
      <blockquote className={s.cite}>
        <h6>{name} <span>说</span></h6>
        <p>{msg}</p>
      </blockquote>
    )
  }
}