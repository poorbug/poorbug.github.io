import React from 'react'
import Interval from 'components/interval'
import 'styles/core'
import s from './index.style.scss'
import favs from 'static/favicon/'


export default class Layout extends React.Component {
	state= {
		favicon: 0
	}

	faviconFlash = () => {
		let { favicon } = this.state
		favicon ++
		favicon > 7 ? favicon = 0 : null
		this.setState({ favicon })
		const links = document.getElementsByTagName('link')

		for(let i in links){
			if(links[i].rel && links[i].rel.indexOf('icon') >= 0){
				links[i].href = favs[favicon]
			}
		}
	}

  render() {
    return (
      <div className={s.layoutBox}>
        { this.props.children }
        <Interval timeout={15*1000} enabled={true} callback={this.faviconFlash}/>
      </div>
    )
  }
}
