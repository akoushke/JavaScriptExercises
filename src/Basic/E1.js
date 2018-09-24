import React, { Component } from 'react';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default class E1 extends Component {
  // 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
  // Sample Output : Today is : Tuesday.
  // Current time is : 10 PM : 30 : 38
  constructor() {
    super();
    this.getToday = this.getToday.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.now = new Date(Date.now());
  }

  getToday() {
    return this.now.getDay();
  }

  getCurrentTime() {
    let hours = this.now.getHours();
    const am_pm = hours > 12 ? 'PM' : 'AM';
    hours = hours % 12;

    return `Current time is : ${hours} ${am_pm} : ${this.now.getMinutes()} : ${this.now.getSeconds()}`;
  }
  render() {
    const today = this.getToday();

    return (
      <div className="App">
      {`Today is: ${DAYS[today]}`} <br />
      {this.getCurrentTime()}
      </div>
    );
  }
}
