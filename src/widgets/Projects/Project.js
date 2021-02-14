import clsx from 'clsx';
import React, { useState } from "react";
import { createStyles } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = props => makeStyles((theme) => {
    const { durationTop, durationLeft } = props;
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
            }
        },
        'bubble-running': ( {
            top: '50%',
            left: '50%',
            animation: `$float-top ${durationTop}s -20s linear infinite alternate, 
                        $float-left ${durationLeft}s -30s linear infinite`,
            '& div': {
                display: 'none'
            }
        } ),
        'bubble-paused': {
            overflow: 'visible',
            [theme.breakpoints.only('xs')]: {
                backgroundColor: 'red'
            },
            [theme.breakpoints.only('sm')]: {
                backgroundColor: 'purple'
            },
            [theme.breakpoints.only('md')]: {
                backgroundColor: 'blue'
            },
            [theme.breakpoints.only('lg')]: {
                backgroundColor: 'green'
            },
            [theme.breakpoints.only('xl')]: {
                backgroundColor: 'yellow'
            },
            width: 'max(200px, 50%)',
            height: 'max(200px, 50%)',
            borderRadius: '10px',
            top: '50%',
            left: '50%',
            zIndex: 1,
            '& img': {
                position: 'absolute',
                height: '30%',
                top: 0,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'var(--dark-color)',
                borderRadius: '50%',
                boxShadow: 'black 0 0 1px 1px'
            },
            '& div': {
                display: 'block'
            }
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

const Project = ({ name, image, technologies }) => {

    return (
        <div id={`project-${name}`}>
            {name}
            <img src={image} alt={name}/>
            <ul>
                {
                    technologies.map(i => (
                        <li>{i.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Project;

