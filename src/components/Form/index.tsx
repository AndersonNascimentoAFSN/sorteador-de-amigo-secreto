import React, { useRef, useState } from 'react';
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useAddParticipants } from '../../state/hook/useAddParticipants';
import { useErrorMessage } from '../../state/hook/useErrorMessage';

export default function Form() {
    const [name, setName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const addParticipantGlobalState = useAddParticipants();
    const errorMessage = useErrorMessage();

    const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addParticipantGlobalState(name);
        setName('');
        inputRef.current?.focus();
    }
    return (
        <Box
            component="form"
            onSubmit={addParticipant}
            sx={{ display: 'flex', alignItems: 'center', width: "50%" }}
        >
            <PersonAddIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <FormControl error>
                <TextField
                    ref={inputRef}
                    id="input-with-sx"
                    label="Insira os nomes dos participantes"
                    variant="standard"
                    fullWidth
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoFocus
                    aria-describedby="component-error-text"
                />
                {
                    errorMessage &&
                    <FormHelperText
                        id="component-error-text" role="alert"
                    >
                        {errorMessage}
                    </FormHelperText>
                }
            </FormControl>
            <Button
                type="submit"
                variant="contained"
                disabled={!name}
            >
                Adicionar
            </Button>
        </Box>

        // <Box
        //     component="form"
        //     onSubmit={addParticipant}
        //     sx={{ display: 'flex', alignItems: 'flex-start', width: "50%" }}
        // >
        //     <FormControl
        //     // component="form"
        //     // variant="standard"
        //     >
        //         <InputLabel htmlFor="component-error">Name</InputLabel>
        //         <OutlinedInput
        //             label="Name"
        //             id="component-error"
        //             value={name}
        //             onChange={(event) => setName(event.target.value)}
        //             aria-describedby="component-error-text"
        //         />
        //         <FormHelperText id="component-error-text">Error</FormHelperText>
        //     </FormControl>
        //     <Button
        //         type="submit"
        //         variant="contained"
        //         disabled={!name}
        //     >
        //         Adicionar
        //     </Button>
        // </Box>
    )
}
