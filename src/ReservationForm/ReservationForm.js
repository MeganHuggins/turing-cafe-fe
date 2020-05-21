import React, { Component } from 'react';
import './ReservationForm.css';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  render () {
    return (
      <form classsName='res-form'>
        <input type='text' placeholder='Name' value={this.state.name} />
        <input type='text' placeholder='date' value={this.state.date} />
        <input type='text' placeholder='time' value={this.state.time} />
        <input type='number' placeholder='number' value={this.state.number} />
        <button>Make Reservation</button>
      </form>
    )
  }
}

export default ReservationForm;
