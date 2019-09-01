import React from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';

const Slide = props => {
    return (
        <Controller>
            <Scene
                indicators={false}
                duration={props.duration}
                triggerHook={props.trigger}
            >
                <Timeline>
                    <Tween
                        from={{ scale: 0 }}
                        to={{ scale: 1 }}
                    >
                        {props.children}
                    </Tween>
                </Timeline>
            </Scene>
        </Controller>
    );
};

export default Slide;