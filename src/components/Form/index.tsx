import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function Form() {
    return (
        // <Box
        //     component="form"
        //     sx={{
        //         '& > :not(style)': { m: 1, width: '25ch' }
        //     }}
        //     noValidate
        //     autoComplete="off"
        // >
        //     <TextField size="small" id="outlined-basic" label="Outlined" variant="outlined" />
        //     <Button variant="contained">Adicionar</Button>
        // </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: "50%" }}>
            <PersonAddIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Insira os nomes dos participantes" variant="standard" fullWidth />
            <Button variant="contained" disabled={true}>Adicionar</Button>
        </Box>
    )
}
