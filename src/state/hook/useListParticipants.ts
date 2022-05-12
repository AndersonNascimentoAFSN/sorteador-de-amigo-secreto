import { useRecoilValue } from 'recoil';
import { listParticipantsState } from "../atom";

export const useListParticipants = () => {
    return useRecoilValue(listParticipantsState);
}