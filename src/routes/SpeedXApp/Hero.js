import { AndroidIcon, AppleIcon } from 'components/Icons'
import { isAndroid, isIos, isWechat } from 'utils/navigator'

import { Dialog } from 'react-toolbox'
import React from 'react'
import classnames from 'classnames'
import s from './Hero.style'

export default class Hero extends React.Component {
  state = {
    android: false,
    ios: false,
    wechat: false,
    notice: false
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      android: isAndroid(),
      ios: isIos(),
      wechat: isWechat()
    })
  }

  download = () => {
    const { android, ios, wechat } = this.state
    if (wechat) {
      this.setState({
        ...this.state,
        notice: true
      })
      return
    }
    if (android) {
      root.location = 'http://global.speedx.com/apk/latest.apk'
      return
    }
    if (ios) {
      root.location = 'https://itunes.apple.com/cn/app/ye-shou-qi-xing-zi-xing-che/id931448360?mt=8'
      return
    }
  }

  clearNotice = () => {
    this.setState({
      ...this.state,
      notice: false
    })
  }

  render() {
    const { android, ios, notice } = this.state
    return (
      <div className={classnames(s.hero, this.props.className)}>
        <Dialog
          className={s.notice}
          active={notice}
          onOverlayClick={this.clearNotice}
          type='fullscreen' >
          <p>点击右上角在浏览器(Safari)中打开</p>
        </Dialog>
        <h1>SPEEDX</h1>
        <div>
          <h2>野兽骑行</h2>
          <h3>成为自己心中的野兽</h3>
          <ul>
            <li style={{display: !ios ? 'inline-block' : 'none'}}>
              <label onClick={this.download}><AndroidIcon />Android</label>
              <div style={{backgroundImage: 'url(https://global.speedx.com/speedx/app/android-qrcode.png)'}} />
            </li>
            <li style={{display: !android ? 'inline-block' : 'none'}}>
              <label onClick={this.download}><AppleIcon />App Store</label>
              <div style={{backgroundImage: 'url(https://global.speedx.com/speedx/app/ios-qrcode.png)'}} />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
