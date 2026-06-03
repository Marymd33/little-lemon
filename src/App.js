import React, { useReducer, useState } from 'react';
import BookingForm from './components/BookingForm';

export const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        default:
            return state;
    }
};

function App() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = (formData) => {
        console.log("Form Submitted:", formData);
        setIsSubmitted(true);
    };

    return (
        <div className="App" style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
            <header style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#495E57', color: '#EDEFEE' }}>
                <h1 style={{ color: '#F4CE14', fontSize: '2.5rem', margin: '0 0 10px 0' }}>Little Lemon Restaurant</h1>
                <p style={{ fontSize: '1.2rem', margin: 0 }}>Book Your Table Online</p>
            </header>

            <main style={{ padding: '40px 20px', backgroundColor: '#EDEFEE', minHeight: '50vh' }}>
                {isSubmitted ? (
                    <div style={{ textAlign: 'center', color: '#495E57', marginTop: '40px' }} role="alert">
                        <h2 style={{ fontSize: '2rem' }}>🎉 Booking Confirmed!</h2>
                        <p style={{ fontSize: '1.1rem' }}>Thank you for choosing Little Lemon. Your reservation details have been successfully saved.</p>
                    </div>
                ) : (
                    <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ textAlign: 'center', color: '#495E57', marginBottom: '20px' }}>Reserve a Table</h3>
                        <BookingForm 
                            availableTimes={availableTimes} 
                            dispatch={dispatch} 
                            submitForm={submitForm} 
                        />
                    </div>
                )}
            </main>

            <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px', marginTop: 'auto' }}>
                <p>© 2026 Little Lemon Restaurant. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
