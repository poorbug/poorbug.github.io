import React from 'react'
import s from './style'

export default class ImgTxt extends React.Component {
  render() {
    const { img, txt } = this.props
    return (
      <div className={s.imgtxt}>
        <img src={img} />
        <br />
        <p>{txt}</p>
      </div>
    )
  }
}