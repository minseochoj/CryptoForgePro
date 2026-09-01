// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoForgePro title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoForgePro/i);
    expect(titleElement).toBeInTheDocument();
});
