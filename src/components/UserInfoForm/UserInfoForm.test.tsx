import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { UserInfoForm } from './UserInfoForm';
import { translationsEn } from '@/src/translations/en';

describe('UserInfoForm', () => {
  const mockSubmit = jest.fn((data) => data);

  beforeEach(() => {
    mockSubmit.mockClear();
    render(<UserInfoForm onSubmit={mockSubmit} />);
  });

  test('it renders correctly with all TextInput fields and submit button', () => {
    expect(screen.getByText('First name')).toBeInTheDocument();
    expect(screen.getByText('Last name')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText(translationsEn.buttonNext)).toBeInTheDocument();
  });

  test('it validates input fields before submitting', async () => {
    const submitButton = screen.getByRole('button', { name: translationsEn.buttonNext });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('First name is required')).toBeInTheDocument();
      expect(screen.getByText('Last name is required')).toBeInTheDocument();
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
  });

  test('it validates the email address when the incorrect email address format is provided', async () => {
    const firstNameInput = screen.getByLabelText('firstName');
    const lastNameInput = screen.getByLabelText('lastName');
    const emailInput = screen.getByLabelText('email');
    const submitButton = screen.getByRole('button', { name: translationsEn.buttonNext });

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
  });

  test('it submits the form when valid data is provided', async () => {
    const form = screen.getByRole('form');

    const firstNameInput = screen.getByLabelText('firstName');
    const lastNameInput = screen.getByLabelText('lastName');
    const emailInput = screen.getByLabelText('email');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    fireEvent.submit(form);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled();
      expect(mockSubmit.mock.calls[0][0]).toEqual({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
      });
    });
  });
});
