import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { fetchedReservations } from '../apiCalls/apiCalls';
import '@testing-library/jest-dom';
jest.mock('../apiCalls/apiCalls');

describe('<App />', () => {
  const mockReservations = [
    {
      'id': 44,
      'name': 'Julian',
      'date': '5/15',
      'time': '10:00',
      'number': 12,
    },
    {
      'id': 100,
      'name': 'Leah',
      'date': '9/2',
      'time': '6:00',
      'number': '4',
    }
  ];

  it('Should be able to make a new reservation', async () => {
    fetchedReservations.mockResolvedValueOnce(mockReservations);

    const mockNewReservation = {
        id: 26,
        name: 'Megan',
        date: '7/26',
        time: '7:00',
        number: '8',
    };

    const { getByText, getByPlaceholderText } = render(<App />);

    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date');
    const timeInput = getByPlaceholderText('Time');
    const numberInput = getByPlaceholderText('Number');
    const submitBtn = getByText('Make Reservation');

    await waitFor(() => {
      fireEvent.change(nameInput, {target: {value:'Megan'}});
      fireEvent.change(dateInput, {target: {value:'7/26'}});
      fireEvent.change(timeInput, {target: {value:'7:00'}});
      fireEvent.change(numberInput, {target: {value:'8'}});
    });

    fireEvent.click(submitBtn);

    const name = getByText('Megan');
    const date = getByText('7/26');
    const time = getByText('7:00');
    const number = getByText('Number of guests: 8');

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  });


})
