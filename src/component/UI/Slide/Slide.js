import React from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';

const Slide = props => {
    let direction = '';

    switch (props.from) {
        case 'left':
            direction = '-100%';
            break;
        case 'right':
            direction = '100%';
            break;
        default:
            direction = '';
    }

    return (
        <Controller>
            <Scene
                indicators={false}
                duration={props.duration}
                triggerHook="onEnter"
                offset={30}
            >
                <Timeline>
                    <Tween
                        from={{ x: direction }}
                        to={{ x: '0%' }}
                    >
                        {props.children}
                    </Tween>
                </Timeline>
            </Scene>
        </Controller>
    );
};

export default Slide;