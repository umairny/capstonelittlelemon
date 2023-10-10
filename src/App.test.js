import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/forms/BookingForm';
import { MemoryRouter } from 'react-router-dom';

describe('BookingForm Component', () => {
    it('renders without errors', () => {
        const mockDispatch = jest.fn();
        const mockSetStep = jest.fn();
        const mockSetProgress = jest.fn();

        render(<BookingForm
            loading={false}
            state={{
                availableTimes: [

                ]
            }}
            dispatch={mockDispatch}
            formik={{
                values: {
                    date: '',
                    time: '',
                    guests: '',
                    occasion: '',
                },
                errors: {},
                touched: {},
                getFieldProps: () => ({}),
                setFieldValue: () => { },
            }}
            step={0}
            setStep={mockSetStep}
            progress={0}
            setProgress={mockSetProgress}
        />);
        // You can add more specific tests here if needed
    });

    it('handles form input and button click', () => {
        const mockDispatch = jest.fn();
        const mockSetStep = jest.fn();
        const mockSetProgress = jest.fn();

        const { getByLabelText, getByText } = render(
            <BookingForm
                loading={false}
                state={{
                    availableTimes: ["12:00", "11:00"]
                }}
                dispatch={mockDispatch}
                formik={{
                    values: {
                        date: '2023-10-15',
                        time: '',
                        guests: '',
                        occasion: '',
                    },
                    errors: {},
                    touched: {},
                    getFieldProps: () => ({}),
                    setFieldValue: () => { },
                }}
                step={0}
                setStep={mockSetStep}
                progress={0}
                setProgress={mockSetProgress}
            />
        );

        // Simulate user input
        fireEvent.change(getByLabelText('Choose Date:'), {
            target: { value: '2023-10-15' },
        });

        fireEvent.change(getByLabelText('Choose Time:'), {
            target: { value: '12:00' },
        });


        fireEvent.change(getByLabelText('Number of guests'), {
            target: { value: '4' },
        });

        fireEvent.change(getByLabelText('Occasion'), {
            target: { value: 'birthday' },
        });

        // Ensure that the form fields have been updated
        expect(getByLabelText('Choose Date:').value).toBe('2023-10-15');
        expect(getByLabelText('Choose Time:').value).toBe('12:00');
        expect(getByLabelText('Number of guests').value).toBe('4');
        expect(getByLabelText('Occasion').value).toBe('birthday');

        // Simulate button click
        fireEvent.click(getByText('Next'));

        // Ensure that the appropriate functions have been called
        expect(mockSetStep).toHaveBeenCalledTimes(1);
        expect(mockSetStep).toHaveBeenCalledWith(1);

        expect(mockSetProgress).toHaveBeenCalledTimes(1);
        expect(mockSetProgress).toHaveBeenCalledWith(33.33);
    });
});
