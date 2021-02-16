import React from "react";
import { createStyles } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const sizes = {
    'large': '100px',
    'medium': '80px',
    'small': '60px'
}

const useStyles = makeStyles(() => {
    return createStyles({
        'bubble': {
            position: 'absolute',
            width: 'var(--bubble-size)',
            height: 'var(--bubble-size)',
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
            animation: `$float-top var(--duration-top) -20s linear infinite alternate, 
                        $float-left var(--duration-left) -30s linear infinite`
        },
        '@keyframes float-top': {
            'from': { top: 'calc(0% + 0.5 * var(--bubble-size))' },
            'to': { top: 'calc(100% - 0.5 * var(--bubble-size))' }
        },
        '@keyframes float-left': {
            'from': { left: '-100%' },
            'to': { left: '200%' }
        }
    });
});

const newDuration = (base, range) => base + range * Math.random();

const Bubble = ({ name, size }) => {

    const durationTop = newDuration(10, 10);
    const durationLeft = newDuration(10, 5);
    const styles = useStyles();

    return (
        <div id={`bubble-${name}`}
             style={{
                 '--duration-top': `${durationTop}s`,
                 '--duration-left': `${durationLeft}s`,
                 '--bubble-size': sizes[size]
             }}
             className={styles.bubble}>
            <img src={`./images/${name}.png`}
                 alt={name}
            />
        </div>
    );
}

export default Bubble;

