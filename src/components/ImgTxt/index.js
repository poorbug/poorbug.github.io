import Dialog from 'react-toolbox/lib/dialog'
import React from 'react'
import s from './style'

export default class ImgTxt extends React.Component {
  state = {
    active: false
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    const { img, txt } = this.props
    return (
      <div className={s.imgtxt}>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title={txt}
          type='normal'
          className={s.dialog}
        >
          <img src={img} />
        </Dialog>
        <img src={img} onClick={this.handleToggle}/>
        <br />
        <p>{txt}</p>
      </div>
    )
  }
}