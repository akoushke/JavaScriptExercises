import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Links } from './Routes';
import './App.css';

export default class App extends Component {
  setupLinks() {
    const links =
        Links.map(link => {
          return (
            <li key={link.name}>
              <Link  to={`${link.path}`}>{link.name}</Link>
                <ul>
                  {link.children.map(childLink => {
                      return (
                        <li key={childLink.name}>
                          <Link to={`${childLink.path}`}>{childLink.name}</Link>
                      </li>);
                  })}
              </ul>
            </li>)
        });


    return (
      <ul>
        {links}
      </ul>
    );
  }

  render() {
    return (
      <div className='App'>
        {this.setupLinks()}
        {Routes}
      </div>
    );
  }
}
