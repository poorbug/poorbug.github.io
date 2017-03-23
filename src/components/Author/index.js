import { Link } from 'react-router'
import React from 'react'
import s from './style'
import wilddog from 'wilddog'

export default class Author extends React.Component {
  state = {
    read: 0,
    like: 0
  }

  componentWillMount () {
    const { path } = this.props
    wilddog.initializeApp({ syncURL: 'https://poorbug.wilddogio.com' })
    const sync = wilddog.sync()
    sync.ref(`/${path}`).on('value', snapshot => {
      const value = snapshot.val()
      this.setState({
        like: value.like,
        read: value.read
      })
    }, error => {
      alert(JSON.stringify(error))
    })
    sync.ref(`/${path}/read`).transaction(currentValue => (currentValue || 0) + 1)
  }

  render() {
    const { img, name, email, time } = this.props
    const { read, like } = this.state
    return (
      <div className={s.author}>
        <img src={img} />
        <div>
          <Link to='me' >{name}</Link><a href={`mailto:${email}`} rel='author'>📧</a><br/>
          <time pubdate>{time}</time><span>阅读 {read}</span><span>喜欢 {like}</span>
        </div>
      </div>
    )
  }
}