import React, { forwardRef, useEffect, useState } from "react";
import Section from "../Section";

const options = [
    'I am a fullstack developer',
    'I can create awesome apps',
    'I love learning new things'
]

const Home = forwardRef((_, ref) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setIndex(index + 1);
        }, 2000);
    }, [index]);

    const text = options[index % options.length];

    return (
        <Section ref={ref}>
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                background: 'url("https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")',
                backgroundSize: 'cover'
            }}>
                <div style={{
                    width: '50%',
                    height: '50%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontFamily: "'Josefin Sans', sans-serif",
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <div style={{ fontSize: '128px', textAlign: 'center' }}>Hi, I'm Silviu</div>
                    <div style={{ fontSize: '60px', textAlign: 'center' }}>
                        {text}
                    </div>
                </div>
            </div>

        </Section>
    )
});

export default Home;