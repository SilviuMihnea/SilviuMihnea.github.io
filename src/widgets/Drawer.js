import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({}));

const scrollIntoView = ref => {
    ref.current.scrollIntoView({ behavior: "smooth" });
}

const Drawer = ({ ref1, ref2, ref3 }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: '100%' }}>
            <IconButton key={'home'} onClick={() => scrollIntoView(ref1)}>
                <Icon>home</Icon>
            </IconButton>
            <div style={{ flexGrow: 1 }}/>
            <IconButton key={'skills'} onClick={() => scrollIntoView(ref2)}>
                <Icon>handyman</Icon>
            </IconButton>
            <IconButton key={'projects'} onClick={() => scrollIntoView(ref3)}>
                <Icon>bubble_chart</Icon>
            </IconButton>
            <IconButton key={'education'}>
                <Icon>architecture</Icon>
            </IconButton>
            <IconButton key={'hobbies'}>
                <Icon>sports_esports</Icon>
            </IconButton>
            <div style={{ flexGrow: 1 }}/>
            <IconButton key={'menu'}>
                <Icon>arrow_right</Icon>
            </IconButton>
        </div>
    );
}

export default Drawer;