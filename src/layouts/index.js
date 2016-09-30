import React from 'react'
import Interval from 'components/interval'
import s from 'styles/core'
import fav1 from 'static/favicon/1.png'
import fav2 from 'static/favicon/2.png'
import fav3 from 'static/favicon/3.png'
import fav4 from 'static/favicon/4.png'
import fav5 from 'static/favicon/5.png'
import fav6 from 'static/favicon/6.png'
import fav7 from 'static/favicon/7.png'
import fav8 from 'static/favicon/8.png'

export default class Layout extends React.Component {
	state= {
		favicon: 1,
		favs: [0, fav1, fav2, fav3, fav4, fav5, fav6, fav7, fav8]
	}

	faviconFlash = () => {
		let { favicon } = this.state
		favicon ++
		favicon > 8 ? favicon = 1 : null
		this.setState({
			...this.state,
			favicon: favicon
		})
		const links = document.getElementsByTagName('link')

		for(let i in links){
			if(links[i].rel && links[i].rel.indexOf('icon')>=0){
				links[i].href = this.state.favs[favicon]
			}
		}
	}

  render() {
    return (
      <div>
        { this.props.children }
        <Interval timeout={15*1000} enabled={true} callback={this.faviconFlash}/>
      </div>
    )
  }
}
