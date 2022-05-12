import React from 'react';
import { useListParticipants } from '../../state/hook/useListParticipants';

export default function ListParticipants() {
    const listParticipants: string[] = useListParticipants();
    return (
        <ul>
            {listParticipants.map((participant) => (
                <li key={participant}>
                    {participant}
                </li>
            ))}
        </ul>
    )
}
