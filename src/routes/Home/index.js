import { Link } from 'react-router'
import React from 'react'
import s from './style'

export default class Home extends React.Component {
  render() {
    return (
      <div className={s.box}>
      	<h1>Coding Muscle</h1>
      	<p><Link to='me' >🚲 Poorbug</Link></p>
      	<ul>
          <li><Link to='getup' >React 博客工程 上线</Link></li>
          <li><Link to='app' >新 SpeedX App 页面开发总结</Link></li>
      	</ul>
      </div>
    )
  }
}
