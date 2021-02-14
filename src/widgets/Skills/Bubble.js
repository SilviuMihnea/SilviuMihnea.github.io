import clsx from 'clsx';
import React from "react";
import { createStyles } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = ({ durationTop, durationLeft }) => makeStyles((theme) => {
    return createStyles({
        'bubble-large': {
            width: '100px',
            height: '100px'
        },
        'bubble-medium': {
            width: '80px',
            height: '80px'
        },
        'bubble-small': {
            width: '60px',
            height: '60px'
        },
        'bubble': {
            position: 'absolute',
            borderRadius: '50%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            boxShadow: 'rgba(0, 0, 0, 0.4) 0 5px 15px 5px',
            backgroundColor: 'var(--light-color)',
            transition: 'ease 1s',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',
            top: '50%',
            display: 'flex',
            '& img': {
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: 'auto',
                userSelect: 'none'
            },
            animation: `$float-top ${durationTop}s -20s linear infinite alternate, 
                        $float-left ${durationLeft}s -30s linear infinite`
        },
        '@keyframes float-top': {
            'from': { top: '0%' },
            'to': { top: '100%' }
        },
        '@keyframes float-left': {
            'from': { left: '-20%' },
            'to': { left: '120%' }
        }
    });
});

const newDuration = (base, range) => base + range * Math.random();

const Bubble = ({ name, size }) => {

    const durationTop = newDuration(10, 10);
    const durationLeft = newDuration(10, 20);
    const styles = useStyles({ durationTop, durationLeft })();

    return (
        <div id={`bubble-${name}`}
             className={clsx(styles.bubble, styles[`bubble-${size}`])}>
            <img src={`./images/${name}.png`}
                 alt={name}
            />
        </div>
    );
}

export default Bubble;

