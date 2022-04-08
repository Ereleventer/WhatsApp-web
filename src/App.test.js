import { render, screen } from '@testing-library/react';
import ChatPage from './ChatPage';

test('renders learn react link', () => {
  render(<ChatPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
