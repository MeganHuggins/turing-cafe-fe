import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationCard from './ReservationCard';

describe('<ReservationCard />', () => {
  it('Should display reservations on the page', () => {
    const mockReservation = {
      id: '26',
      name: 'Megan',
      date: '7/26',
      time: '7:00',
      number: '8',
    };

    const { getByText } = render(<ReservationCard resInfo={mockReservation} />);

    const name = getByText('Megan');
    const date = getByText('7/26');
    const time = getByText('7:00');
    const number = getByText('Number of guests: 8');

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  });
});
