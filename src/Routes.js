import App from './App';
import { Basic, E1, E2 } from './Basic';
import React from 'react';
import { Route, Link } from 'react-router-dom';


const Links = [
  { name: 'Home', path:'/', children: []},
  { name: 'Basic', path:'/Basic', children: [
    { name: 'Exercise1', path:'/Basic/Exercise1'},
    { name: 'Exercise2', path:'/Basic/Exercise2'}
  ]}
];

const Routes = [
  <Route key='/' path='/' component={App}/>,
  <Route key='/Basic' path='/Basic' component={Basic}/>,
  <Route key='/Basic/Exercise1' path='/Basic/Exercise1' component={E1}/>,
  <Route key='/Basic/Exercise2' path='/Basic/Exercise2' component={E2}/>
];

export { Routes, Links };
