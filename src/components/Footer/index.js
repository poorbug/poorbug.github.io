import React from 'react'
import s from './style'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={s.footer}>
        <p>Designed by <a onClick={() => alert('都说了没有设计师了')}>根本没有设计师</a></p>
      </footer>
    )
  }
}