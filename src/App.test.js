import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Menu from './pages/Menu';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
    it('renders specific text', async () => {
        const { getByText } = render(<MemoryRouter><Menu /></MemoryRouter>);
        let specificText = await getByText("we serve new items");
        expect(specificText).toBeInTheDocument();
    });
});