import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../components/Form';

describe('form', () => {
    describe('when the input is void', () => {
        test('new participants cannot be added', () => {
            render(<Form />);

            const input = screen
                .getByPlaceholderText('Insira os nomes dos participantes');
            const button = screen.getByRole('button');

            expect(input).toBeInTheDocument();
            expect(button).toBeDisabled();
        });
    });
})