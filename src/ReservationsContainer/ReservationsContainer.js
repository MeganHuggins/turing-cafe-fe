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
    <section className='res-card-container'>
      {currentReservations}
    </section>
  );
}

export default ReservationsContainer;
