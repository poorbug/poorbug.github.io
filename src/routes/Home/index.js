import React from 'react'
import { Link } from 'react-router'
import s from './style'

export default class Home extends React.Component {
  render() {
    return (
      <div className={s.box}>
      	<h1>Coding Muscle</h1>
      	<Link to='me' >Poorbug</Link>
      	<ul>
      		<li><Link to='app' >新 SpeedX App 页面开发总结</Link></li>
      	</ul>
      </div>
    )
  }
}
