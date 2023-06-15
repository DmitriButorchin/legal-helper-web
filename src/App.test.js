import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const content = screen.getByText(/App/i);
  expect(content).toBeInTheDocument();
});
