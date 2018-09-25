import App from './App';
import { Basic, E1 as BE1 } from './Basic';
import React from 'react';
import { Route } from 'react-router-dom';


const Links = [
  { name: 'Home', path:'/', children: []},
  { name: 'Basic', path:'/Basic', children: [
    { name: 'Exercise1', path:'/Basic/Exercise1'},
  ]},
  { name: 'Fundamental', path:'/Fundamental', children: [
    { name: 'Exercise1', path:'/Fundamental/Exercise1'},
  ]}
];

const Routes = [
  <Route key='/' path='/' component={App}/>,
  <Route key='/Basic' path='/Basic' component={Basic}/>,
  <Route key='/Basic/Exercise1' path='/Basic/Exercise1' component={BE1}/>,
  <Route key='/Fundamental/Exercise1' path='/Fundamental/Exercise1' component={BE1}/>,
];

export { Routes, Links };
