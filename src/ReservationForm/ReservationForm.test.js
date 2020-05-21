import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReservationForm from './ReservationForm';
import '@testing-library/jest-dom';

describe('<ReservationForm />', () => {
  it('Should render a form on to the page', () => {
    const { getByText, getByPlaceholderText } = render(<ReservationForm />);

    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date');
    const timeInput = getByPlaceholderText('Time');
    const numberInput = getByPlaceholderText('Number');
    const submitBtn = getByText('Make Reservation');

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

})
