import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, listParticipantsState } from "../atom";

export const useAddParticipants = () => {
    const setList = useSetRecoilState(listParticipantsState);
    const list = useRecoilValue(listParticipantsState);
    const setError = useSetRecoilState(errorState);
    const timeout = 3000;
    return (nameParticipants: string) => {
        if (list.includes(nameParticipants)) {
            setError('Nomes duplicados não são permitidos!');
            setTimeout(() => {
                setError('');
            }, 5000);
            return;
        }
        setList((listPrev) => [...listPrev, nameParticipants]);
        setError('');
    }
}