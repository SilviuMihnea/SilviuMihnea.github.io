import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Home from "../Home";
import Skills from "../Skills";
import Section from "../Section";
import React, { useRef } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
    page: {
        display: "flex", height: '100vh', overflow: 'hidden'
    },
    drawer: {
        display: "flex",
        flexDirection: "column",
        height: '100%',
        fontSize: '32px',
        backgroundColor: 'var(--dark-color)',
        '& button': {
            color: 'white',
            fontSize: '64px'
        }
    },
    main: {
        display: "block",
        flexDirection: "column",
        height: '100%',
        width: '100%',
        overflow: 'auto'
    }
}));


const MainPage = () => {
    const styles = useStyles();

    const homeRef = useRef();
    const skillsRef = useRef();
    const projectsRef = useRef();
    const educationRef = useRef();
    const hobbiesRef = useRef();
    const contactRef = useRef();

    const scrollIntoView = ref => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    const BigIcon = ({children}) => {
        return (
            <Icon style={{fontSize: '24px'}}>{children}</Icon>
        )
    }

    return (
        <div className={styles.page}>
            <div className={styles.drawer}>
                <IconButton disableFocusRipple disableTouchRipple key={'home'} onClick={() => scrollIntoView(homeRef)}>
                    <BigIcon>home</BigIcon>
                </IconButton>
                <div style={{ flexGrow: 1 }}/>
                <IconButton key={'skills'} onClick={() => scrollIntoView(skillsRef)}>
                    <BigIcon>handyman</BigIcon>
                </IconButton>
                <IconButton key={'projects'} onClick={() => scrollIntoView(projectsRef)}>
                    <BigIcon>bubble_chart</BigIcon>
                </IconButton>
                <IconButton key={'education'} onClick={() => scrollIntoView(educationRef)}>
                    <BigIcon>architecture</BigIcon>
                </IconButton>
                <IconButton key={'hobbies'} onClick={() => scrollIntoView(hobbiesRef)}>
                    <BigIcon>sports_esports</BigIcon>
                </IconButton>
                <IconButton key={'contact'} onClick={() => scrollIntoView(contactRef)}>
                    <BigIcon>phone</BigIcon>
                </IconButton>
                <div style={{ flexGrow: 1 }}/>
            </div>
            <div className={styles.main}>
                <Home ref={homeRef}/>
                <Skills ref={skillsRef}/>
                <Section ref={projectsRef}>Projects</Section>
                <Section ref={educationRef}>Education</Section>
                <Section ref={hobbiesRef}>Hobbies</Section>
                <Section ref={contactRef}>Contact</Section>
            </div>
        </div>
    )
}

export default MainPage;