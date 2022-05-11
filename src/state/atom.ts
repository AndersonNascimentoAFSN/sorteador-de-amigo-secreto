import { atom } from "recoil";

export const listParticipantsState = atom<string[]>({
    key: 'listParticipantsState',
    default: []
});