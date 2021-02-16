import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles(() => createStyles({
    panel: {
        width: '100%',
        height: '100%',
        zIndex: '2000',
        top: 0,
        left: 0,
        position: 'absolute'
    },
    strip: {
        flexGrow: 1,
        height: '100%',
        display: 'flex',
        '&:nth-child(2n+1)': {
            flexDirection: 'column'
        },
        '&:nth-child(2n)': {
            flexDirection: 'column-reverse'
        }
    },
    loader: {
        width: '100%',
        height: '100%',
        background: 'var(--dark-color)',
        animation: `$shrink 0.9s 0.5s ease-out forwards`,
        boxShadow: 'inset black 0px 0px 1px 0px'
    },
    '@keyframes shrink': {
        from: { height: '100%' },
        to: { height: '0%' }
    }
}));


const FrontPanel = () => {
    const styles = useStyles();
    const [display, setDisplay] = useState('flex');

    useEffect(() => {
        if (display === 'flex') {
            setTimeout(() => {
                setDisplay('none');
            }, 1400);
        }
    });

    return (
        <div className={styles.panel} style={{ display }}>
            <div className={styles.strip}>
                <div className={styles.loader}/>
            </div>
            <div className={styles.strip}>
                <div className={styles.loader}/>
            </div>
            <div className={styles.strip}>
                <div className={styles.loader}/>
            </div>
            <div className={styles.strip}>
                <div className={styles.loader}/>
            </div>
            <div className={styles.strip}>
                <div className={styles.loader}/>
            </div>
        </div>
    )
};

export default FrontPanel;