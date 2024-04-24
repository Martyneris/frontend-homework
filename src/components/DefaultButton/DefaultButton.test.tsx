import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DefaultButton } from './DefaultButton';

describe('DefaultButton', () => {
  test('it renders the button with the correct title', () => {
    const title = 'Continue';
    render(<DefaultButton title={title} />);

    expect(screen.getByText(title)).toBeVisible();
  });

  test('it handles onClick correctly', () => {
    const handleClick = jest.fn();
    const title = 'Continue';
    render(<DefaultButton title={title} onClick={handleClick} />);

    fireEvent.click(screen.getByText(title));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('it has the provided type', () => {
    const title = 'Continue';
    const type = 'submit';
    render(<DefaultButton title={title} type={type} />);

    expect(screen.getByRole('button', { name: title })).toHaveAttribute('type', type);
  });
});
