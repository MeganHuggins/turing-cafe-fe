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

  updateReservation = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  bookReservation = (e) => {
    e.preventDefault();
    const newReservation = {
      ...this.state
    }
    this.props.addNewReservation(newReservation);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render () {
    return (
      <form classsName='res-form'>
        <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.updateReservation} />
        <input type='text' placeholder='date' name='date' value={this.state.date} onChange={this.updateReservation} />
        <input type='text' placeholder='time' name='time' value={this.state.time} onChange={this.updateReservation} />
        <input type='number' placeholder='number' name='number' value={this.state.number} onChange={this.updateReservation} />
        <button onClick={this.bookReservation}>Make Reservation</button>
      </form>
    )
  }
}

export default ReservationForm;
