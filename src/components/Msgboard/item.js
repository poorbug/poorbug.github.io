import Cite from './cite'
import React from 'react'
import s from './item.style'

export default class Item extends React.Component {
  render() {
    const { cites, name, msg, time, citeme } = this.props
    return (
      <div className={s.item}>
        { cites && cites.length > 0 && <h5 style={{color: '#333'}}>对于: </h5> }
        {
          cites && cites.map((item, key)=> <Cite name={item.name} msg={item.msg} key={key} /> )
        }
        <h5>{name} <span>说</span></h5>
        <p>{msg}</p>
        <p><time>{time}</time><a onClick={citeme}>引用</a></p>
      </div>
    )
  }
}