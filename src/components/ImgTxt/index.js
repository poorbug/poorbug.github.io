import Dialog from 'react-toolbox/lib/dialog'
import React from 'react'
import s from './style'

export default class ImgTxt extends React.Component {
  state = {
    active: false,
    force: .3,
    moveX: 0,
    moveY: 0
  }

  componentDidMount() {
    if ('ontouchforcechange' in document === false) {
      this.img.addEventListener('click', this.handleToggle, false)
    }

    const onTouchmove = (e) => {
      this.setState({
        moveX: e.changedTouches[0].pageX - startX,
        moveY: e.changedTouches[0].pageY - startY
      })
    }

    this.img.addEventListener('touchforcechange', e => {
      const currentForce = e.changedTouches[0].force
      // peek == .3
      if (currentForce > .29) {
        e.preventDefault()
        this.setState({ force: currentForce })
        this.img.addEventListener('touchmove', onTouchmove, false)
      }
    }, false)

    let startX
    let startY
    this.img.addEventListener('touchstart', e => {
      startX = e.changedTouches[0].pageX
      startY = e.changedTouches[0].pageY
    }, false)

    this.img.addEventListener('touchend', e => {
      setTimeout(() => {
        this.setState({
          force: .3,
          moveX: 0,
          moveY: 0
        })
        this.img.removeEventListener('touchmove', onTouchmove, false)
      }, 0)
    }, false)
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active })
  }


  render() {
    const { img, txt } = this.props
    const { force, moveX, moveY } = this.state
    const scale = (force - .3) * 4 + 1
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
        <img
          src={img}
          style={{
            transform: `matrix(${scale}, 0, 0, ${scale}, ${-moveX * 2}, ${-moveY * 2})`
          }}
          ref={ c => this.img = c }
        />
        <br />
        <p>{txt}</p>
      </div>
    )
  }
}