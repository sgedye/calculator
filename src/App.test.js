import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the "calculator" title correctly', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/calculator/i);
  expect(linkElement).toBeInTheDocument();
});