import { Home, About } from '../statics'

const routes = [
  { 
    path: '/',
    exact: true,
    component: Home
  },
  { 
    path: '/about',
    component: About
  }
]

export default routes