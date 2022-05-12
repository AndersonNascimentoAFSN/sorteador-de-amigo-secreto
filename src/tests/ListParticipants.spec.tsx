import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ListParticipants from '../components/ListParticipants';
import { useListParticipants } from '../state/hook/useListParticipants';


jest.mock('../state/hook/useListParticipants', () => {
    return {
        useListParticipants: jest.fn()
    }
});

describe('listParticipants component', () => {
    describe('listParticipants empty', () => {
        beforeEach(() => {
            (useListParticipants as jest.Mock).mockReturnValue([]);
        });

        it('should be render empty list of participants', () => {
            render(<RecoilRoot><ListParticipants /></RecoilRoot>);

            const itens = screen.queryAllByRole('listitem');
            expect(itens).toHaveLength(0);
        });
    });

    describe('listParticipants not empty', () => {
        const participants = ['Anderson', 'Yanni'];
        beforeEach(() => {
            (useListParticipants as jest.Mock).mockReturnValue(participants);
        });

        it('should be render list of participants', () => {
            render(<RecoilRoot><ListParticipants /></RecoilRoot>);


            const itens = screen.queryAllByRole('listitem');
            expect(itens).toHaveLength(participants.length);
        });
    });
});

