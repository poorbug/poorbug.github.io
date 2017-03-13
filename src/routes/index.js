import Layout from '../layouts/'
import Home from './Home/'
import Playground from './Playground/'
import Me from './me/'
import App from './SpeedXApp/'
import Getup from './Getup/'

export const createRoutes = (store) => ({
  component: Layout,
  childRoutes: [
    {
      path: '/',
      component: Home
    },
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
