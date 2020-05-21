import React from 'react';
import './ReservationCard.css';


const ReservationCard = ({ resInfo }) => {

  return (
    <div className='reservation-card'>
      <h2>{resInfo.name}</h2>
      <p>{resInfo.date}</p>
      <p>{resInfo.time}</p>
      <p>Number of guests: {resInfo.number}</p>
      <button>Delete Reservation</button>
    </div>
  )
}

export default ReservationCard;
