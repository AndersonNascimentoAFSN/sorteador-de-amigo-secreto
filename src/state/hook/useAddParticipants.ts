import { useSetRecoilState } from "recoil"
import { listParticipantsState } from "../atom"

export const useAddParticipants = () => {
    const setList = useSetRecoilState(listParticipantsState);
    return (nameParticipants: string) =>
        setList((listPrev) => [...listPrev, nameParticipants]);
}