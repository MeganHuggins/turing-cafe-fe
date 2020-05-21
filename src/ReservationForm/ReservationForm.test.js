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

  it('Should have the correct data values', () => {
    const { getByText, getByPlaceholderText } = render(<ReservationForm />);

    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date');
    const timeInput = getByPlaceholderText('Time');
    const numberInput = getByPlaceholderText('Number');
    const submitBtn = getByText('Make Reservation');

    fireEvent.change(nameInput, {target: {value:'Megan'}});
    fireEvent.change(dateInput, {target: {value:'7/26'}});
    fireEvent.change(timeInput, {target: {value:'7:00'}});
    fireEvent.change(numberInput, {target: {value:'8'}});

    expect(nameInput.value).toBe('Megan');
    expect(dateInput.value).toBe('7/26');
    expect(timeInput.value).toBe('7:00');
    expect(numberInput.value).toBe('8');
  });

})
