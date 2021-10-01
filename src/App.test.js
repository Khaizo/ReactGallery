import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React App', () => {
  render(<App />);
  const linkElement = screen.getByText(/src\/App.js/i);
  expect(linkElement).toBeInTheDocument();
});
