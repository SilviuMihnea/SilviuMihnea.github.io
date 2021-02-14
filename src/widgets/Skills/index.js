import React, { forwardRef } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";
import Section from "../Section";
import BubblesMap from "./BubbleMap";

const useStyles = makeStyles(() => createStyles({

}));

const Skills = forwardRef((_, ref) => {

    const styles = useStyles();

    return (
       <Section ref={ref}>
           <BubblesMap/>
       </Section>
    )
});

export default Skills;

