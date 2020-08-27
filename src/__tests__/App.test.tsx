import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('Renders header name', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Renato G. Nunes/i);
    expect(linkElement).toBeInTheDocument();
});
