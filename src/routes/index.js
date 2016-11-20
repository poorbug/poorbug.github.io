import Layout from '../layouts/'
import Home from './Home/'
import Me from './Me/'
import App from './SpeedXApp/'

export const createRoutes = (store) => ({
  component: Layout,
  childRoutes: [
  	{
  		path: '/',
  		component: Home
  	},
  	{
  		path: 'me',
  		component: Me
  	},
    {
      path: 'app-page',
      component : App
    }
  ]
})
export default createRoutes
