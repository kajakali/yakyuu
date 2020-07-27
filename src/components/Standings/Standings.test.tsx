import React from 'react';
import { render } from '@testing-library/react';
import Standings from './Standings';

test('renders standings link', () => {
  const { getByText } = render(<Standings />);
  const linkElement = getByText(/standings/i);
  expect(linkElement).toBeInTheDocument();
});
