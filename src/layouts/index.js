import 'styles/core'

import { Header } from 'components/'
import Interval from 'components/interval'
import React from 'react'
import favs from 'static/favicon/'
import s from './index.style.scss'

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
				<Header />
        { this.props.children }
        <Interval timeout={15*1000} enabled={true} callback={this.faviconFlash}/>
      </div>
    )
  }
}
