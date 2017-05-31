import React from 'react'
import { Route } from 'react-router-dom'
import Main from '../modules/app'
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