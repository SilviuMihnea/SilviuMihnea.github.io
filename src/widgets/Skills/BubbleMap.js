import React from "react";
import bubbles from "./data";
import Bubble from "./Bubble";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
    bubbles: {
        background: 'linear-gradient(315deg, #00bfb2 0%, #028090 74%)',
        backgroundColor: ' #00bfb2',
        width: '100%',
        height: '300px',
        overflow: 'hidden',
        position: 'relative'
    }
}));

const BubblesMap = () => {

    const styles = useStyles();

    return (
        <div className={styles.bubbles}>
            {
                bubbles.map(skill => (
                    <Bubble key={skill.name}
                            name={skill.name}
                            size={skill.size}
                    />
                ))
            }
        </div>
    )
}

export default BubblesMap;

