import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    // Validation Errors
    const [errors, setErrors] = useState({});

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!date) newErrors.date = 'Please select a date';
        if (!time) newErrors.time = 'Please select a time';
        if (guests < 1 || guests > 10) newErrors.guests = 'Number of guests must be between 1 and 10';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            submitForm({ date, time, guests, occasion });
        }
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            style={{ display: 'grid', gap: '20px' }}
            aria-label="Little Lemon Table Booking Form"
        >
            <label htmlFor="res-date" style={{ fontWeight: 'bold', color: '#495E57' }}>Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                onChange={handleDateChange} 
                required
                aria-required="true"
                aria-invalid={errors.date ? "true" : "false"}
                style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.date && <span style={{color: 'red', fontSize: '12px'}} role="alert">{errors.date}</span>}

            <label htmlFor="res-time" style={{ fontWeight: 'bold', color: '#495E57' }}>Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                required
                aria-required="true"
                aria-invalid={errors.time ? "true" : "false"}
                style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
                <option value="">-- Select a time --</option>
                {availableTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>
            {errors.time && <span style={{color: 'red', fontSize: '12px'}} role="alert">{errors.time}</span>}

            <label htmlFor="guests" style={{ fontWeight: 'bold', color: '#495E57' }}>Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                value={guests} 
                onChange={(e) => setGuests(Number(e.target.value))}
                required
                aria-required="true"
                aria-invalid={errors.guests ? "true" : "false"}
                style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.guests && <span style={{color: 'red', fontSize: '12px'}} role="alert">{errors.guests}</span>}

            <label htmlFor="occasion" style={{ fontWeight: 'bold', color: '#495E57' }}>Occasion</label>
            <select 
                id="occasion" 
                value={occasion} 
                onChange={(e) => setOccasion(e.target.value)}
                style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button 
                type="submit" 
                aria-label="On Click Confirm Booking"
style={{ backgroundColor: '#F4CE14', color: '#333333', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
            >
                Make Your Reservation
            </button>
        </form>
    );
};

export default BookingForm;







