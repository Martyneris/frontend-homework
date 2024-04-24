import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormLayout } from './FormLayout';

describe('FormLayout', () => {
  const mockOnSubmit = jest.fn();
  const testTitle = 'Test title';
  const testButtonTitle = 'Test button title';
  const formChildContent = 'Test form child';

  beforeEach(() => {
    render(
      <FormLayout title={testTitle} buttonTitle={testButtonTitle} onSubmit={mockOnSubmit}>
        <div>{formChildContent}</div>
      </FormLayout>,
    );
  });

  test('it renders the title and button with correct text', () => {
    expect(screen.getByText(testTitle)).toBeInTheDocument();
    expect(screen.getByText(testButtonTitle)).toBeInTheDocument();
  });

  test('it renders the children content', () => {
    expect(screen.getByText(formChildContent)).toBeInTheDocument();
  });

  test('it calls onSubmit when the button is clicked', () => {
    const button = screen.getByRole('button', { name: testButtonTitle });
    fireEvent.click(button);
    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
