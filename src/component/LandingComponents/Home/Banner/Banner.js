import React from 'react';
import './Banner.css';
import landing1 from "../../../../assets/image/landing1.png";
import Ring from "./Ring/Ring";
import Backdrop from "./Backdrop/Backdrop";
import SignupForm from "./SignupForm/SignupForm";
import BannerText from "./BannerText/BannerText";

const Banner = props => {
    const background = {
        backgroundImage: `url(${landing1})`
    };

    return (
        <div style={background} className={'Banner'}>
            <Backdrop/>
            <SignupForm/>
            <Ring/>
            <BannerText/>
        </div>
    );
};

export default Banner;