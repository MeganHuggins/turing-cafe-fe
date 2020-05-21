import React, { Component } from 'react';
import './App.css';
import { fetchedReservations, postReservations, deleteReservations } from '../apiCalls/apiCalls';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';

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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

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
