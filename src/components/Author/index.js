import React from 'react'
import s from './style'

export default class Author extends React.Component {
  render() {
    const { img, name, email, time } = this.props
    return (
      <div className={s.author}>
        <img src={img} />
        <div>
          <a href='http://poorbug.tech/me'>{name}</a><a href={`mailto:${email}`} rel='author'>📧</a><br/>
          <time pubdate>{time}</time>
        </div>
      </div>
    )
  }
}