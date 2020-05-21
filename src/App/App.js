import React, { Component } from 'react';
import './App.css';
import { fetchedReservations } from '../apiCalls/apiCalls';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import ReservationForm from '../ReservationForm/ReservationForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = async () => {
    let newReservations = await fetchedReservations();
    this.setState({ reservations: newReservations
    })
  };

  addNewReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm
            addNewReservation={this.addNewReservation}
          />
        </div>
        <div className='resy-container'>
          <ReservationsContainer
            reservations={this.state.reservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
