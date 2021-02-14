import React, { useRef } from "react";
import Skills from "./widgets/Skills";
import Drawer from "./widgets/Drawer";
import Section from "./widgets/Section";
import { ThemeProvider } from '@material-ui/core';
import lightTheme from "./themes/lightTheme";
import BubblesMap from "./widgets/Skills/BubbleMap";

function ThemedApp({ children }) {
    return (
        <ThemeProvider theme={lightTheme}>
            {children}
        </ThemeProvider>
    )
}

function App() {

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    return (
        <ThemeProvider theme={lightTheme}>

            <div style={{ display: "flex", height: '100vh', overflow: 'hidden' }}>
                <Drawer ref1={ref1} ref2={ref2} ref3={ref3}/>
                <div style={{
                    display: "block",
                    flexDirection: "column",
                    height: '100%',
                    width: '100%',
                    overflow: 'auto'
                }}>
                    <Skills ref={ref1}/>
                    <Section ref={ref2}/>
                    <Section ref={ref3}/>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
