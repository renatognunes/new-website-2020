import React from 'react';
import LandingRight from '../components/LandingRight';
import LandingLeft from '../components/LandingLeft';

function LandingPage(): JSX.Element {
    return (
        <div className="landing-wrapper">
            <LandingRight />
            <LandingLeft />
        </div>
    );
}

export default LandingPage;
