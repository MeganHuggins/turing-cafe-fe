export const fetchedReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
};

export const postReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .catch(error => console.error(error.message))
};

export const deleteReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .catch(error => console.error(error.message))
};
