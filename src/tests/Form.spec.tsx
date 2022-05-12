import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import Form from '../components/Form';
import { RecoilRoot } from 'recoil';

describe('form', () => {
    describe('when the input is void', () => {
        it('new participants cannot be added', () => {
            render(<RecoilRoot><Form /></RecoilRoot>);
            const input = screen.getByRole('textbox', {
                name: /insira os nomes dos participantes/i
            });
            const button = screen.getByRole('button');

            expect(input).toBeInTheDocument();
            expect(button).toBeDisabled();
        });
    });
    describe('when the input is filled and click button', () => {
        it('add participants', () => {
            render(<RecoilRoot><Form /></RecoilRoot>);
            const input = screen.getByRole('textbox', {
                name: /insira os nomes dos participantes/i
            });
            const button = screen.getByRole('button');

            fireEvent.change(input, {
                target: {
                    value: 'Jon Snow'
                }
            });

            fireEvent.click(button);

            expect(input).toHaveFocus();
            expect(input).toHaveValue('');
        });
        it('not add participants when already exists', () => {
            render(<RecoilRoot><Form /></RecoilRoot>);
            const input = screen.getByRole('textbox', {
                name: /insira os nomes dos participantes/i
            });
            const button = screen.getByRole('button');

            fireEvent.change(input, {
                target: {
                    value: 'Jon Snow'
                }
            });
            fireEvent.click(button);

            fireEvent.change(input, {
                target: {
                    value: 'Jon Snow'
                }
            });
            fireEvent.click(button);

            const messageError = screen.getByRole('alert');

            expect(messageError.textContent).toBe('Nomes duplicados não são permitidos!');
        });
        it('message error must disappear after timeout', () => {
            jest.useFakeTimers();

            render(<RecoilRoot><Form /></RecoilRoot>);
            const input = screen.getByRole('textbox', {
                name: /insira os nomes dos participantes/i
            });
            const button = screen.getByRole('button');

            fireEvent.change(input, {
                target: {
                    value: 'Jon Snow'
                }
            });
            fireEvent.click(button);

            fireEvent.change(input, {
                target: {
                    value: 'Jon Snow'
                }
            });
            fireEvent.click(button);

            let messageError = screen.queryByRole('alert');
            expect(messageError).toBeInTheDocument();

            act(() => {
                jest.runAllTimers();
            });

            messageError = screen.queryByRole('alert');
            expect(messageError).toBeNull();
        });
    });
});