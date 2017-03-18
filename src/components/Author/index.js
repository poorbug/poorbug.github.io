import React from 'react'
import s from './style'

export default class Author extends React.Component {
  render() {
    const { img, name, email, time } = this.props
    return (
      <div className={s.author}>
        <img src={img} />
        <div>
          <span>{name}</span><a href={`mailto: ${email}`} rel='author'>name</a><br/>
          <time pubdate>{time}</time>
        </div>
      </div>
    )
  }
}