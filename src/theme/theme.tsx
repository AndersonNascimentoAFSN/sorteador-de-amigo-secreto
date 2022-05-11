import { ThemeProvider, createTheme } from '@mui/material/styles';
import themeOptions from './themeOptions';

const theme = createTheme({
    palette: themeOptions.palette,
    typography: themeOptions.typography
});

export {
    ThemeProvider, theme
}