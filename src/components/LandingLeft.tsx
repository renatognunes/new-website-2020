import React from 'react';
import { ReactComponent as LandingImage } from '../assets/undraw_heatmap_uyye.svg';
import { ReactComponent as LandingImage1 } from '../assets/undraw_feeling_proud_qne1.svg';

function LandingLeft(): JSX.Element {
    return (
        <div className="landing-image">
            <LandingImage1 />
        </div>
    );
}

export default LandingLeft;
