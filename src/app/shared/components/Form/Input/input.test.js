import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import AppInput from './index';

describe('AppInput', () => {
  const { result } = renderHook(() => useForm());

  it('renders input with label and placeholder', () => {
    const { getByText, getByPlaceholderText } = render(
      <AppInput
        label="Username"
        name="username"
        control={result.current.control}
      />,
    );

    expect(getByText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter Username')).toBeInTheDocument();
  });

  it('changes input value when typing', () => {
    const mockControl = result.current.control;
    const { getByPlaceholderText } = render(
      <AppInput label="Username" name="username" control={mockControl} />,
    );

    const input = getByPlaceholderText('Enter Username');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(input).toHaveValue('test');
  });
});
