import App from './SpeedXApp/'
import Getup from './Getup/'
import Home from './Home/'
import Layout from '../layouts/'
import Me from './me/'
import Playground from './Playground/'

export const createRoutes = () => ({
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'playground',
      component: Playground
    },
  	{
  		path: 'me',
  		component: Me
  	},
    {
      path: 'app',
      component : App
    },
    {
      path: 'getup',
      component : Getup
    }
  ]
})
export default createRoutes
