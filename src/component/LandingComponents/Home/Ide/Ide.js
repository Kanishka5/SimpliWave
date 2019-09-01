import React from 'react';
import './Ide.css';
import BackgroundImage from '../../../../assets/image/github-atom-light-1024x649.png';
import Video from '../../../../assets/video/real-time.mp4';

const Ide = props => {
    const Background = {
        backgroundImage: `url(${BackgroundImage})`
    };

    return (
        <div className={'Ide'}>
            <div style={Background} className={'Background'}>
                <div className={'Cover'}>
                    <p>Code in our Real-Time IDE</p>
                    <div className={'IdeVideo'}>
                        <video autoPlay loop muted>
                            <source src={Video} type={"video/mp4"}/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ide;