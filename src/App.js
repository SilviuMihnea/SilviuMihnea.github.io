import React from "react";
import { ThemeProvider } from '@material-ui/core';
import lightTheme from "./themes/lightTheme";
import MainPage from "./widgets/MainPage";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <MainPage/>
        </ThemeProvider>
    );
}

export default App;
