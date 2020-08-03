import React from 'react';
import { render } from '@testing-library/react';
import Clock from './Clock';

/* test('renders standings link', () => {
  const { getByText } = render(<Standings />);
  const linkElement = getByText(/standings/i);
  expect(linkElement).toBeInTheDocument();
}); */

test('renders title of clock', () => {
  const { getByText } = render(<Clock/>);
  const title = getByText(/I am a clock/i);
  expect(title).toBeInTheDocument();
})
