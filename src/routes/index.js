import Layout from '../layouts/'
import Home from './Home/'

export const createRoutes = (store) => ({
  component: Layout,
  childRoutes: [
  	{
  		path: '/',
  		component: Home
  	}
  ]
})
export default createRoutes
