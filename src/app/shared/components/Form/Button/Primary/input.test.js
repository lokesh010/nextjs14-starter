import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppPrimaryButton from './AppPrimaryButton';

describe('AppPrimaryButton', () => {
  test('renders button with default label "Submit"', () => {
    render(<AppPrimaryButton />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('renders button with custom label', () => {
    render(<AppPrimaryButton label="Custom Label" />);
    expect(
      screen.getByRole('button', { name: 'Custom Label' }),
    ).toBeInTheDocument();
  });

  test('calls onClick callback when button is clicked', () => {
    const handleClick = jest.fn();
    render(<AppPrimaryButton onClick={handleClick} />);
    const button = screen.getByRole('button', { name: 'Submit' });
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  test('passes other props to the button element', () => {
    render(<AppPrimaryButton id="submit-button" />);
    expect(screen.getByRole('button', { name: 'Submit' })).toHaveAttribute(
      'id',
      'submit-button',
    );
  });
});
