import App from './SpeedXApp/'
import Getup from './Getup/'
import Home from './Home/'
import Layout from '../layouts/'
import Me from './me/'
import Playground from './Playground/'
import Threejs from './Threejs'

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
    },
    {
      path: 'threejs',
      component : Threejs
    }
  ]
})
export default createRoutes
