import { atom } from "recoil";

export const listParticipantsState = atom<string[]>({
    key: 'listParticipantsState',
    default: []
});

export const errorState = atom<string>({
    key: 'errorState',
    default: ''
});