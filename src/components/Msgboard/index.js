import Button from 'react-toolbox/lib/button'
import Item from './item'
import React from 'react'
import s from './style'
import { timestampToString } from 'utils/time'
import wilddog from 'wilddog'

export default class Msgboard extends React.Component {
  state = {
    mycite: null,
    msgs: null
  }

  componentWillMount () {
    const { path } = this.props
    wilddog.initializeApp({ syncURL: 'https://poorbug.wilddogio.com' })
    wilddog.sync().ref(`/${path}`).child('msgs').on('value', snapshot => {
      this.setState({ msgs: snapshot.val() })
    })
  }

  getCites = (cite) => {
    if (!cite) return []
    const { msgs } = this.state
    const newCite = msgs[cite].cite
    const cites = this.getCites(newCite)
    cites.push(msgs[cite])
    return cites
  }

  pushCite = () => {
    if (!this.name.value) {
      alert('请输入名字')
      return
    }
    if (!this.msg.value) {
      alert('请输入留言')
      return
    }
    const { path } = this.props
    const ref = wilddog.sync().ref(`/${path}`).child('msgs')
    ref.push({
      name: this.name.value,
      msg: this.msg.value,
      time: new Date().getTime(),
      cite: this.state.mycite
    })
    this.name.value = ''
    this.msg.value = ''
    this.setState({ mycite: null })
  }

  render() {
    const { msgs, mycite } = this.state
    const keys = msgs ? Object.keys(msgs) : []

    return (
      <div className={s.msgboard}>
        <h2>留言板</h2>
        <div className={s.msgs}>
          {
            !keys || keys.length === 0 && <p style={{ textAlign: 'center', color: '#333' }}>色即是空</p>
          }
          {
            keys && keys.map((item, i) => {
              const { time, name, msg, cite } = msgs[item]
              const fmtTime = timestampToString(time, 'shortDateTime')
              return (
                <Item
                  key={i}
                  time={fmtTime}
                  name={name}
                  msg={msg}
                  cites={this.getCites(cite)}
                  citeme={() => this.setState({ mycite: item })}
                />
              )
            })
          }
        </div>
        <div className={s.mymsg}>
          {
            mycite && <h5>引用: </h5>
          }
          {
            mycite && (<blockquote>
              <h6>{msgs[mycite].name} 说: </h6>
              <p>{msgs[mycite].msg}</p>
              <span onClick={() => this.setState({ mycite: null })}>+</span>
            </blockquote>)
          }
          <p><input type='text' placeholder='你的名字' ref={c => this.name = c}/> 说:</p>
          <textarea ref={c => this.msg = c} placeholder='写的你的留言...'/>
          <Button label='提交' raised onClick={this.pushCite}/>
        </div>
      </div>
    )
  }
}
