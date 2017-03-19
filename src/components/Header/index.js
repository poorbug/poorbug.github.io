import { Link } from 'react-router'
import React from 'react'
import s from './style'

export default class Header extends React.Component {
  render() {
    return (
      <header className={s.header}>
        <Link to='/' >🚲 Poorbug</Link>
      </header>
    )
  }
}