import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from '../App';

test('Renders the BookingForm heading/label', () => {
    const mockTimes = ['17:00'];
    render(<BookingForm availableTimes={mockTimes} dispatch={() => {}} submitForm={() => {}} />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial time slots', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expect(initializeTimes()).toEqual(expectedTimes);
});

test('updateTimes returns the same state when action is triggered', () => {
    const initialState = ['17:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2026-06-03' };
    const expectedState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expect(updateTimes(initialState, action)).toEqual(expectedState);
});
