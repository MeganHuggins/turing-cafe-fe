import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';
import './ReservationsContainer.css';

const ReservationsContainer = ({ reservations }) => {

  const currentReservations = reservations.map(reservation => {
    return(
      <ReservationCard
      key={reservation.id}
      resInfo={reservation}
      />      
    )
  });

  return (
    <main className='res-card-container'>
      {currentReservations}
    </main>
  );
}

export default ReservationsContainer;
