import { Link } from 'react-router'
import React from 'react'
import classnames from 'classnames'
import s from './style'
import wilddog from 'wilddog'

export default class Author extends React.Component {
  state = {
    read: 0
  }

  componentWillMount () {
    const { path } = this.props
    wilddog.initializeApp({ syncURL: 'https://poorbug.wilddogio.com' })
    const sync = wilddog.sync()
    sync.ref(`/${path}`).on('value', snapshot => {
      this.setState({ read: snapshot.val().read || 0 })
    }, error => {
      alert(JSON.stringify(error))
    })
    if (!localStorage[`poorbug.${path}.read`]){
      sync.ref(`/${path}/read`).transaction(currentValue => {
        localStorage[`poorbug.${path}.read`] = true
        return (currentValue || 0) + 1
      })
    }
  }

  render() {
    const { img='http://omhr7p9e5.bkt.clouddn.com/blog/monk.gif', name='朽木', email='poorbug@126.com', time, center } = this.props
    const { read, like } = this.state
    return (
      <div className={classnames(s.author, center ? s.center : null)}>
        <img src={img} />
        <div>
          <Link to='me' >{name}</Link><a href={`mailto:${email}`} rel='author'>📧</a><br/>
          <time>{time}</time><span>阅读 {read}</span>
        </div>
      </div>
    )
  }
}